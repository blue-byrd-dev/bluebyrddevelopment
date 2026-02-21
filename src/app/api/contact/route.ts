export const runtime = "nodejs";

import nodemailer from "nodemailer";

type ContactPayload = {
	name: string;
	email: string;
	phone: string;
	projectType: string;
	budget: string;
	timeframe: string;
	message: string;
	website?: string;
};

function escapeHtml(input: string) {
	return input
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function formatPhoneNumber(value: string) {
	const raw = String(value ?? "").replace(/[^\d+]/g, "");

	if (raw.startsWith("+")) {
		return "+" + raw.replace(/\+/g, "").slice(0, 15);
	}

	// US 10 digits
	if (/^\d{10}$/.test(raw)) {
		const area = raw.slice(0, 3);
		const prefix = raw.slice(3, 6);
		const line = raw.slice(6);
		return `+1 ${area}-${prefix}-${line}`;
	}

	// Generic international digits
	if (/^\d{11,15}$/.test(raw)) return "+" + raw.slice(0, 15);

	return raw;
}

function requiredString(v: unknown): v is string {
	return typeof v === "string" && v.trim().length > 0;
}

function buildEmail(payload: ContactPayload) {
	const { name, email, phone, projectType, budget, timeframe, message } = payload;

	const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safePhone = escapeHtml(phone);
	const safeProjectType = escapeHtml(projectType);
	const safeBudget = escapeHtml(budget);
	const safeTimeframe = escapeHtml(timeframe);

	const textContent = `New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Project Details:
- Project Type: ${projectType || "Not specified"}
- Budget: ${budget || "Not specified"}
- Timeframe: ${timeframe || "Not specified"}

Message:
${message}
`;

	const htmlContent = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>New Project Inquiry</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color:#111; max-width: 640px; margin: 0 auto;">
  <div style="border:1px solid #e5e7eb; border-radius: 10px; overflow:hidden;">
    <div style="background:#285AA9; color:#fff; padding:18px 20px; text-align:center;">
      <div style="font-weight:700; letter-spacing:0.02em;">Blue Byrd Development</div>
      <div style="opacity:0.9; margin-top:6px;">New Project Inquiry</div>
    </div>

    <div style="padding:20px; background:#f8fafc;">
      <div style="background:#fff; padding:14px 14px; border-radius:10px; border-left:4px solid #285AA9; margin-bottom:14px;">
        <div style="font-weight:700; margin-bottom:8px; color:#285AA9;">Contact</div>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:6px 0; font-weight:700; width:120px;">Name:</td><td style="padding:6px 0;">${safeName}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Email:</td><td style="padding:6px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Phone:</td><td style="padding:6px 0;">${safePhone ? `<a href="tel:${safePhone}">${safePhone}</a>` : "Not provided"}</td></tr>
        </table>
      </div>

      <div style="background:#fff; padding:14px; border-radius:10px; border-left:4px solid #57c9e6; margin-bottom:14px;">
        <div style="font-weight:700; margin-bottom:8px; color:#0d152a;">Project</div>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:6px 0; font-weight:700; width:120px;">Type:</td><td style="padding:6px 0;">${safeProjectType || "Not specified"}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Budget:</td><td style="padding:6px 0;">${safeBudget || "Not specified"}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Timeframe:</td><td style="padding:6px 0;">${safeTimeframe || "Not specified"}</td></tr>
        </table>
      </div>

      <div style="background:#fff; padding:14px; border-radius:10px; border-left:4px solid #F4B942;">
        <div style="font-weight:700; margin-bottom:8px; color:#0d152a;">Message</div>
        <div style="white-space: normal; background:#f8fafc; padding:12px; border-radius:10px; border:1px solid #e5e7eb;">
          ${safeMessage}
        </div>
      </div>
    </div>

    <div style="background:#f1f5f9; padding:14px 20px; text-align:center; font-size:12px; color:#475569;">
      Sent from the contact form on bluebyrddevelopment.com
    </div>
  </div>
</body>
</html>`;

	return { textContent, htmlContent };
}

export async function POST(req: Request) {
	try {
		const body = (await req.json()) as Partial<ContactPayload>;

		// Honeypot: bots often fill this
		if (requiredString(body.website)) {
 			return Response.json({ success: true });
	}

		// Required field validation
		if (
			!requiredString(body.name) ||
			!requiredString(body.email) ||
			!requiredString(body.phone) ||
			!requiredString(body.projectType) ||
			!requiredString(body.budget) ||
			!requiredString(body.timeframe) ||
			!requiredString(body.message)
		) {
			return Response.json(
				{ success: false, error: "Missing required fields." },
				{ status: 400 },
			);
		}

		const payload: ContactPayload = {
			name: body.name.trim(),
			email: body.email.trim(),
			phone: formatPhoneNumber(body.phone.trim()),
			projectType: body.projectType.trim(),
			budget: body.budget.trim(),
			timeframe: body.timeframe.trim(),
			message: body.message.trim(),
		};

		// Lightweight sanity checks
		if (!payload.email.includes("@")) {
			return Response.json(
				{ success: false, error: "Please enter a valid email." },
				{ status: 400 },
			);
		}
		if (payload.message.length < 10) {
			return Response.json(
				{ success: false, error: "Message is too short." },
				{ status: 400 },
			);
		}

		// Env sanity
		if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
			console.error("Missing EMAIL_USER or EMAIL_PASS env vars.");
			return Response.json(
				{ success: false, error: "Email service not configured." },
				{ status: 500 },
			);
		}

		const { textContent, htmlContent } = buildEmail(payload);

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const toEmail = process.env.TO_EMAIL || process.env.EMAIL_USER;

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: toEmail,
			replyTo: payload.email,
			subject: `New Project Inquiry: ${payload.name} — ${payload.projectType}`,
			text: textContent,
			html: htmlContent,
		});

		return Response.json({ success: true });
	} catch (err) {
		console.error("POST /api/contact error:", err);
		return Response.json(
			{ success: false, error: "Server error sending message." },
			{ status: 500 },
		);
	}
}
