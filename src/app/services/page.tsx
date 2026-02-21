import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import FrequentlyAskedQuestions from "@/components/ui/FrequentlyAskedQuestions";
import Link from "next/link";

export const metadata = {
	title: "Services | Blue Byrd Development",
	description:
		"Websites and platforms built with clear structure, calm strategy, and foundations designed to scale.",
};

const services = [
	{
		title: "Website Rebuild & Repositioning",
		kicker: "For businesses that have outgrown their current site",
		description:
			"A rebuild that clarifies your message, improves structure, and creates a site that feels credible and easy to navigate. Designed to support growth, not just look polished.",
		outcomes: [
			"Clearer messaging and stronger trust signals",
			"A site structure that guides users toward action",
			"A foundation that’s easier to expand over time",
		],
		greatFor: [
			"Nonprofits that need sponsorship and donor credibility",
			"Small businesses ready to look established",
			"Organizations with a site that feels outdated or unclear",
		],
	},
	{
		title: "New Website Build",
		kicker: "For launching with clarity (not chaos)",
		description:
			"A clean, modern site built from scratch with intentional structure. Not a template flip, but a foundation that supports your offer, your audience, and your future growth plans.",
		outcomes: [
			"A professional presence that earns trust quickly",
			"Clear hierarchy and navigation that reduces friction",
			"A site built to evolve as you grow",
		],
		greatFor: [
			"Startups launching their first serious presence",
			"Service brands that need a clear conversion path",
			"New organizations that want to launch correctly the first time",
		],
	},
	{
		title: "MVP & Platform Foundation",
		kicker: "For products that need a real structure early",
		description:
			"An MVP build focused on coherence: the right scope, clean product flow, and architecture decisions that keep the product expandable, not fragile.",
		outcomes: [
			"A usable MVP built around a real user journey",
			"Scalable structure for future features and growth",
			"Reduced rebuild risk as the product evolves",
		],
		greatFor: [
			"Product ideas moving from concept to build",
			"Founders who need a clean phased approach",
			"Teams who want to avoid “rebuild it later” decisions",
		],
	},
];

export default function ServicesPage() {
	return (
		<Container>
			<main className="py-25">
				<header className="max-w-3xl">
					<p className="text-sm uppercase tracking-wide text-[rgb(var(--muted))]">
						Services
					</p>

					<h1 className="mt-3 text-4xl font-semibold tracking-tight">
						Web builds designed to hold up as you grow
					</h1>

					<p className="mt-4 text-lg leading-relaxed text-[rgb(var(--muted))]">
						I build websites and platforms with clarity, credibility, and
						long-term structure. The goal isn’t to ship something flashy. It’s
						to build something that stays coherent as your business evolves.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
						<CTAButton href="/contact">Start a project</CTAButton>
						<Link
							href="/work"
							className="text-sm underline underline-offset-4 hover:opacity-90"
						>
							View case studies →
						</Link>
					</div>
				</header>

				{/* Service cards */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							Core offers
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							These are structured offers built around outcomes. Each one starts
							with clarity and ends with a foundation you can build on.
						</p>
					</div>

					<div className="mt-10 grid gap-6 lg:grid-cols-3">
						{services.map((s) => (
							<ServiceCard key={s.title} service={s} />
						))}
					</div>
				</section>

				{/* What’s included */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							What’s included
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							Every project includes structure, clean implementation, and a
							clear next layer — not just a launch.
						</p>
					</div>

					<div className="mt-10 grid gap-6 md:grid-cols-2">
						<InfoCard
							title="Strategy + Structure"
							items={[
								"Messaging hierarchy and page flow",
								"Information architecture designed for clarity",
								"Recommendations based on the goal, not trends",
							]}
						/>
						<InfoCard
							title="Build + Delivery"
							items={[
								"Clean, scalable implementation",
								"Responsive UI that holds up on mobile",
								"Launch-ready handoff and guidance",
							]}
						/>
						<InfoCard
							title="Trust + Credibility"
							items={[
								"Clear calls-to-action and decision paths",
								"Professional presentation and consistent patterns",
								"Fast, stable foundations that feel reliable",
							]}
						/>
						<InfoCard
							title="A path forward"
							items={[
								"Next steps roadmap: what to improve or expand later",
								"Growth-ready structure (so future updates are easier)",
								"Support options after launch if needed",
							]}
						/>
					</div>
				</section>

				{/* Optional add-ons */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							Optional growth layers
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							These aren’t required to launch, but they’re common next layers
							once the foundation is in place.
						</p>
					</div>

					<div className="mt-10 grid gap-6 md:grid-cols-2">
						<InfoCard
							title="Lead handling + admin tools"
							items={[
								"Contact form wiring and automated responses",
								"Inquiry tracking (e.g., dashboards, status pipelines)",
								"Newsletter setup and subscriber flows",
							]}
						/>
						<InfoCard
							title="Performance + SEO refinements"
							items={[
								"Speed optimizations and image tuning",
								"SEO structure and metadata improvements",
								"Analytics and conversion tracking setup",
							]}
						/>
						<InfoCard
							title="Content expansion"
							items={[
								"Service detail pages and landing pages",
								"Case study systems and proof pages",
								"Resource funnels (when it supports acquisition)",
							]}
						/>
						<InfoCard
							title="Product features"
							items={[
								"Authentication and personalization",
								"User messaging / inquiry flows",
								"Phased MVP expansion planning",
							]}
						/>
					</div>
				</section>

				{/* FAQ */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							Common questions
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							A few practical answers before you reach out.
						</p>
					</div>

					<div className="mt-10">
						<FrequentlyAskedQuestions
							items={[
								{
									q: "Do you work with nonprofits, startups, and small businesses?",
									a: "Yes, that’s the core. Projects work best when there’s a real goal, a clear audience, and a desire to build something that lasts.",
								},
								{
									q: "Do you do pricing packages?",
									a: "I’ll recommend the right scope after a short discovery. Some projects fit clean packages, others need a phased plan. Either way, you’ll get clarity before you commit.",
								},
								{
									q: "Can you work with what I already have?",
									a: "Often, yes. If the foundation is usable, we can strengthen structure and clarity without forcing a full rebuild. If it’s limiting growth, I’ll tell you directly.",
								},
								{
									q: "What if I’m not sure what I need yet?",
									a: "That’s normal. Start with the goal and what feels broken. My job is to translate that into a clear plan.",
								},
							]}
						/>
					</div>
				</section>

				{/* CTA */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
						<h2 className="text-2xl font-semibold tracking-tight">
							Ready to start?
						</h2>
						<p className="mt-3 max-w-3xl leading-relaxed text-[rgb(var(--muted))]">
							If you want a site or platform that feels clear, credible, and
							built to evolve — let’s talk.
						</p>
						<div className="mt-7">
							<CTAButton href="/contact">Start a project</CTAButton>
						</div>
				</section>
			</main>
		</Container>
	);
}

function ServiceCard({
	service,
}: {
	service: {
		title: string;
		kicker: string;
		description: string;
		outcomes: string[];
		greatFor: string[];
	};
}) {
	return (
		<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-7">
			<p className="text-xs uppercase tracking-wide text-[rgb(var(--muted))]">
				{service.kicker}
			</p>
			<h3 className="mt-2 text-xl font-semibold tracking-tight">{service.title}</h3>
			<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
				{service.description}
			</p>

			<div className="mt-5">
				<p className="text-sm font-semibold">Key outcomes</p>
				<ul className="mt-3 list-disc space-y-2 pl-6 text-[rgb(var(--muted))]">
					{service.outcomes.map((o) => (
						<li key={o}>{o}</li>
					))}
				</ul>
			</div>

			<div className="mt-6 border-t border-[rgb(var(--border))] pt-5">
				<p className="text-sm font-semibold">Great for</p>
				<ul className="mt-3 list-disc space-y-2 pl-6 text-[rgb(var(--muted))]">
					{service.greatFor.map((g) => (
						<li key={g}>{g}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
	return (
		<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-7">
			<h3 className="text-lg font-semibold tracking-tight">{title}</h3>
			<ul className="mt-4 list-disc space-y-2 pl-6 text-[rgb(var(--muted))]">
				{items.map((i) => (
					<li key={i}>{i}</li>
				))}
			</ul>
		</div>
	);
}
