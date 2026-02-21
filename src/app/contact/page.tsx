import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
	title: "Contact | Blue Byrd Development",
	description:
		"Book a call or send project details. Blue Byrd Development builds clear, scalable web foundations.",
};

const BOOKING_URL = "https://calendar.app.google/Z95Fd56AVePkEtEXA";

export default function ContactPage() {
	return (
		<Container>
			<main className="py-16">
				<header className="max-w-3xl">
					<p className="text-sm uppercase tracking-wide text-[rgb(var(--muted))]">
						Contact
					</p>
					<h1 className="mt-3 text-4xl font-semibold tracking-tight">
						Start with clarity.
					</h1>
					<p className="mt-4 text-lg leading-relaxed text-[rgb(var(--muted))]">
						If you’re ready to move, book a short call. If you’re still shaping
						scope, send the details — I’ll reply with a clear next step.
					</p>
				</header>

				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="grid gap-8 lg:grid-cols-2 lg:items-start">
						{/* Left: booking + contact details */}
						<div className="space-y-6">
							<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
								<h2 className="text-2xl font-semibold tracking-tight">
									Book a call
								</h2>
								<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
									15–20 minutes. We’ll clarify the goal, what’s needed, and the
									best path forward.
								</p>

								<a
									href={BOOKING_URL}
									target="_blank"
									rel="noreferrer"
									className="btn btn-primary mt-6"
								>
									Start a project →
								</a>

								<p className="mt-3 text-xs text-[rgb(var(--muted))]">
									Prefer email first? Use the message form.
								</p>
							</div>

							<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
								<h2 className="text-xl font-semibold tracking-tight">
									Contact details
								</h2>

								<div className="mt-4 space-y-3 text-sm text-[rgb(var(--muted))]">
									<p>
										<span className="font-semibold text-[rgb(var(--fg))]">
											Phone:
										</span>{" "}
										<a
											className="underline underline-offset-4 hover:opacity-90"
											href="tel:+18302821648"
										>
											(+1) 830-282-1648
										</a>
									</p>
									<p>
										<span className="font-semibold text-[rgb(var(--fg))]">
											Email:
										</span>{" "}
										<a
											className="underline underline-offset-4 hover:opacity-90"
											href="mailto:k.byrd@bluebyrddevelopment.com"
										>
											k.byrd@bluebyrddevelopment.com
										</a>
									</p>
									<p>
										<span className="font-semibold text-[rgb(var(--fg))]">
											Location:
										</span>{" "}
										United States (remote)
									</p>
								</div>

								<div className="mt-6 flex flex-wrap gap-3 text-sm">
									<a
										href="https://www.linkedin.com/company/blue-byrd-development/"
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline"
									>
										LinkedIn
									</a>
									<a
										href="https://bsky.app/profile/bluebyrddevelopment.com"
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline"
									>
										Bluesky
									</a>
									<a
										href="https://www.facebook.com/bluebyrddevelopment/"
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline"
									>
										Facebook
									</a>
								</div>
							</div>
						</div>

						{/* Right: form */}
						<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
							<h2 className="text-2xl font-semibold tracking-tight">
								Send project details
							</h2>
							<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
								The more context you share, the more useful my response will be.
							</p>

							<div className="mt-6">
								<ContactForm />
							</div>
						</div>
					</div>
				</section>

				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							What happens next
						</h2>
						<p className="mt-3 max-w-3xl leading-relaxed text-[rgb(var(--muted))]">
							If you book a call, you’ll get clarity fast: scope, priorities,
							and a recommended path forward. If you send a message, I’ll reply
							with next steps and a few questions to tighten the plan.
						</p>
					</div>
				</section>
			</main>
		</Container>
	);
}
