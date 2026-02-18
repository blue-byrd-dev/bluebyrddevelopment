import { NextResponse } from "next/server";
import { getDb } from "@/lib/firebase/admin";
import { rateLimit } from "@/lib/rateLimit";

function getIP(req: Request) {
  // Vercel / proxies commonly set this
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return "unknown";
}

export async function POST(req: Request) {
  try {
    const ip = getIP(req);
    const rl = rateLimit(`lead:${ip}`, 5, 60_000); // 5/min per IP
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Try again shortly." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, company, message, website, honey } = body ?? {};

    // Honeypot: bots fill hidden fields
    if (honey) {
      return NextResponse.json({ ok: true }); // pretend success
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const db = getDb();
    await db.collection("leads").add({
      name,
      email,
      company: company || "",
      website: website || "",
      message,
      createdAt: new Date().toISOString(),
      ip,
      source: "bluebyrddevelopment.com",
      userAgent: req.headers.get("user-agent") || "",
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
