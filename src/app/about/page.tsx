import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";
import Step from "@/components/ui/Step";
import FrequentlyAskedQuestions from "@/components/ui/FrequentlyAskedQuestions";
import Principle from "@/components/ui/Principle";

export const metadata = {
	title: "About | Blue Byrd Development",
	description:
		"Blue Byrd Development builds clear, scalable digital systems with calm strategy and long-term structure, not just design.",
};

export default function AboutPage() {
	return (
		<Container>
			<main className="py-25">
				<header className="max-w-3xl">
					<p className="text-sm uppercase tracking-wide text-[rgb(var(--muted))]">
						About Blue Byrd Development
					</p>

					<h1 className="mt-3 text-4xl font-semibold tracking-tight">
						Calm strategy. Clean structure. Work that lasts.
					</h1>

					<p className="mt-4 text-lg leading-relaxed text-[rgb(var(--muted))]">
						Blue Byrd Development is a boutique solo studio building websites
						and platforms with clarity, credibility, and long-term growth in
						mind. The goal isn’t to ship something that looks nice, it’s to
						build something that stays coherent as your business evolves.
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

				{/* Philosophy */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<h2 className="text-2xl font-semibold tracking-tight">
						What I optimize for
					</h2>

					<p className="mt-3 max-w-3xl leading-relaxed text-[rgb(var(--muted))]">
						Most websites fail quietly: unclear messaging, weak structure, and
						decisions that make future updates expensive. I build with a
						different priority order — so the work supports growth instead of
						creating friction.
					</p>

					<div className="mt-8 grid gap-6 md:grid-cols-3">
						<Principle
							title="Clarity"
							body="Messaging and structure that make the next step obvious — for customers, partners, and donors."
						/>
						<Principle
							title="Credibility"
							body="A calm, professional presence that earns trust quickly and holds up under scrutiny."
						/>
						<Principle
							title="Longevity"
							body="Foundations designed to evolve: scalable structure, clean organization, and growth-ready decisions."
						/>
					</div>
				</section>

				{/* How I Work */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							How I work
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							The process is designed to reduce uncertainty. You’ll always know
							what we’re doing, why we’re doing it, and what the work supports
							next.
						</p>
					</div>

					<div className="mt-8 space-y-6">
						<Step
							number="01"
							title="Align on the objective"
							body="We define what success means, who we’re speaking to, and what the site or platform needs to make easier."
						/>
						<Step
							number="02"
							title="Build the structure"
							body="Information architecture, page flow, and messaging hierarchy come before any visual polish."
						/>
						<Step
							number="03"
							title="Design for trust"
							body="Clean presentation, consistent patterns, and a tone that matches the brand — confident, not loud."
						/>
						<Step
							number="04"
							title="Implement a scalable foundation"
							body="The build is organized so future updates, new pages, and new features don’t require a rebuild."
						/>
						<Step
							number="05"
							title="Launch with a clear next layer"
							body="You don’t just get a finished site — you get a forward path: what to refine, improve, or expand when ready."
						/>
					</div>
				</section>

				{/* Who I Build For */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<h2 className="text-2xl font-semibold tracking-tight">
						Who this is for
					</h2>

					<p className="mt-3 max-w-3xl leading-relaxed text-[rgb(var(--muted))]">
						I work best with clients who care about clarity and long-term value
						— not trends. This includes nonprofits, startups, agencies, and
						small businesses that want a digital presence built to hold up as
						they grow.
					</p>

					<div className="mt-8 grid gap-6 md:grid-cols-2">
						<FitCard
							title="Good fit"
							items={[
								"You want clear messaging and a professional presence",
								"You’re building something meant to last, not a quick patch",
								"You value structure, not just aesthetics",
								"You want a foundation that supports future growth",
							]}
						/>
						<FitCard
							title="Not the best fit"
							items={[
								"You want a trendy redesign without clarity work",
								"You need “as fast as possible” with no discovery",
								"You want a template flip with minimal thinking",
								"You’re not ready to invest in a real foundation",
							]}
						/>
					</div>
				</section>

				{/* FAQs */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							Questions clients ask early
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							These are the practical questions behind most projects — answered
							in plain language.
						</p>
					</div>

					<div className="mt-10">
						<FrequentlyAskedQuestions
							items={[
								{
									q: "Do you only do development?",
									a: "No. Most of the value is upstream: structure, messaging hierarchy, and decision-making. The build is where it becomes real, but the outcome is shaped earlier.",
								},
								{
									q: "Can you work with what I already have?",
									a: "Yes. If the foundation is usable, I’ll strengthen structure and clarity without forcing a full rebuild. If it’s limiting growth, I’ll tell you directly and propose the cleanest path forward.",
								},
								{
									q: "What if I don’t have content yet?",
									a: "That’s common. We can start with structure and positioning, then fill content in deliberately. The goal is coherence, not rushing pages live.",
								},
								{
									q: "Do you support ongoing updates?",
									a: "Yes. Many projects continue after launch with improvements, new pages, and growth layers. The site is built to make that easy.",
								},
							]}
						/>
					</div>
				</section>

				{/* Closing CTA */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<h2 className="text-2xl font-semibold tracking-tight">
						If you want structure, not noise
					</h2>
					<p className="mt-3 max-w-3xl leading-relaxed text-[rgb(var(--muted))]">
						If you’re ready for a digital presence that feels clear, credible,
						and built to evolve. I’m ready to help you build it.
					</p>

					<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
						<CTAButton href="/contact">Start a project</CTAButton>
						<Link
							href="/work"
							className="text-sm underline underline-offset-4 hover:opacity-90"
						>
							Read the case studies →
						</Link>
					</div>
				</section>
			</main>
		</Container>
	);
}

function FitCard({ title, items }: { title: string; items: string[] }) {
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
