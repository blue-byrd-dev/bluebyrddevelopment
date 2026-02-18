import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
	return (
		<div>
			<section className="relative overflow-hidden border-b border-[rgb(var(--border))]">
				<Container>
					<div className="py-16 sm:py-24">
						<p className="text-sm font-semibold text-[rgb(var(--accent))]">
							Boutique Solo Studio
						</p>

						<h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
							Websites that feel effortless —{" "}
							<span className="text-[rgb(var(--accent))]">and convert</span>.
						</h1>

						<p className="mt-6 max-w-2xl text-lg text-[rgb(var(--muted))]">
							Blue Byrd Development builds fast, modern sites for nonprofits,
							startups, agencies, and small businesses. Strategy-first.
							Performance-obsessed. No fluff.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<CTAButton href="/contact">Book a Call</CTAButton>
							<CTAButton href="/work" variant="ghost">
								See Work
							</CTAButton>
						</div>

						{/* subtle “flight” motif: lightweight gradient blob */}
						<div
							className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
							style={{
								background:
									"radial-gradient(circle, rgba(14,165,233,0.35) 0%, rgba(16,185,129,0.15) 45%, transparent 70%)",
							}}
						/>
					</div>
				</Container>
			</section>

			<section className="py-14">
				<Container>
					<div className="grid gap-6 md:grid-cols-3">
						{[
							{
								title: "Modern rebuilds",
								desc: "Next.js + Tailwind, built for speed and SEO from day one.",
							},
							{
								title: "Conversion-focused",
								desc: "Clear messaging, strong CTAs, and frictionless contact flows.",
							},
							{
								title: "Easy to maintain",
								desc: "Clean structure so you can expand without rewrites.",
							},
						].map((card) => (
							<div
								key={card.title}
								className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
							>
								<h3 className="font-semibold">{card.title}</h3>
								<p className="mt-2 text-sm text-[rgb(var(--muted))]">
									{card.desc}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
}
