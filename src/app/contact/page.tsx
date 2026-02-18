"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ContactPage() {
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [error, setError] = useState<string>("");

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("loading");
		setError("");

		const fd = new FormData(e.currentTarget);
		const payload = Object.fromEntries(fd.entries());

		const res = await fetch("/api/lead", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const data = await res.json().catch(() => ({}));

		if (res.ok && data?.ok) {
			setStatus("success");
			(e.target as HTMLFormElement).reset();
			return;
		}

		setStatus("error");
		setError(data?.error || "Something went wrong.");
	}

	return (
		<Container>
			<div className="py-14">
				<h1 className="text-3xl font-bold">Contact</h1>
				<p className="mt-3 max-w-2xl text-[rgb(var(--muted))]">
					Tell me what you’re building, your timeline, and what “success” looks
					like.
				</p>

				<form onSubmit={onSubmit} className="mt-10 max-w-2xl space-y-4">
					{/* Honeypot (hidden) */}
					<input
						type="text"
						name="honey"
						className="hidden"
						tabIndex={-1}
						autoComplete="off"
					/>

					<div className="grid gap-4 sm:grid-cols-2">
						<div>
							<label className="text-sm font-semibold">Name*</label>
							<input
								name="name"
								required
								className="mt-1 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3"
							/>
						</div>
						<div>
							<label className="text-sm font-semibold">Email*</label>
							<input
								name="email"
								type="email"
								required
								className="mt-1 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3"
							/>
						</div>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<div>
							<label className="text-sm font-semibold">Company</label>
							<input
								name="company"
								className="mt-1 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3"
							/>
						</div>
						<div>
							<label className="text-sm font-semibold">Website</label>
							<input
								name="website"
								className="mt-1 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3"
							/>
						</div>
					</div>

					<div>
						<label className="text-sm font-semibold">Message*</label>
						<textarea
							name="message"
							required
							rows={6}
							className="mt-1 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3"
						/>
					</div>

					<button
						type="submit"
						disabled={status === "loading"}
						className="inline-flex rounded-xl bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-60"
					>
						{status === "loading" ? "Sending..." : "Send Message"}
					</button>

					{status === "success" && (
						<p className="text-sm font-semibold text-[rgb(var(--accent2))]">
							Sent. You’ll hear back soon.
						</p>
					)}
					{status === "error" && (
						<p className="text-sm font-semibold text-red-500">{error}</p>
					)}
				</form>
			</div>
		</Container>
	);
}
