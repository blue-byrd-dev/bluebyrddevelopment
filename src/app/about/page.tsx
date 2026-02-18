import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export default function AboutPage() {
	return (
		<Container>
			<div className="py-14">
				<h1 className="text-3xl font-bold">About</h1>
				<p className="mt-3 max-w-2xl text-[rgb(var(--muted))]">
					Clear offers, clean scopes, and deliverables that ship. (We’ll tighten
					this copy next.)
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{[
						{
							title: "Website Rebuild",
							desc: "Modern Next.js sites that load fast and rank well.",
						},
						{
							title: "Landing + Lead Flow",
							desc: "Conversion-focused pages + forms + tracking-ready.",
						},
						{
							title: "UI + Frontend Polish",
							desc: "Make your product feel expensive (without being slow).",
						},
					].map((s) => (
						<div
							key={s.title}
							className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
						>
							<h3 className="font-semibold">{s.title}</h3>
							<p className="mt-2 text-sm text-[rgb(var(--muted))]">{s.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-10">
					<CTAButton href="/contact">Talk about your project</CTAButton>
				</div>
			</div>
		</Container>
	);
}
