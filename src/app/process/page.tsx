import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";
import Step from "@/components/ui/Step";
import FrequentlyAskedQuestions from "@/components/ui/FrequentlyAskedQuestions";
import Principle from "@/components/ui/Principle";

export const metadata = {
	title: "Process | Blue Byrd Development",
	description:
		"A clear, structured process for building websites and platforms that stay coherent as you grow.",
};

export default function ProcessPage() {
	return (
		<Container>
			<main className="py-25">
				<header className="max-w-3xl">
					<p className="text-sm uppercase tracking-wide text-[rgb(var(--muted))]">
						Process
					</p>

					<h1 className="mt-3 text-4xl font-semibold tracking-tight">
						Structure first. Then build.
					</h1>

					<p className="mt-4 text-lg leading-relaxed text-[rgb(var(--muted))]">
						My process is designed to reduce uncertainty and protect the
						outcome. You’ll always know what we’re doing, why we’re doing it,
						and what the work supports next.
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

				{/* Principles */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<h2 className="text-2xl font-semibold tracking-tight">
						What you can expect
					</h2>
					<p className="mt-3 max-w-3xl leading-relaxed text-[rgb(var(--muted))]">
						This isn’t a “design then hope it works” process. It’s structured so
						messaging, flow, and architecture support the business goal — not
						just the launch date.
					</p>

					<div className="mt-8 grid gap-6 md:grid-cols-3">
						<Principle
							title="Clarity"
							body="We define the message and the path before we polish screens."
						/>
						<Principle
							title="Momentum"
							body="You’ll see progress early, with checkpoints that prevent rework."
						/>
						<Principle
							title="Longevity"
							body="The foundation is built to evolve, not collapse under updates."
						/>
					</div>
				</section>

				{/* Steps */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							The engagement phases
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							Every project is slightly different, but the structure stays the
							same. These phases keep the work focused and predictable.
						</p>
					</div>

					<div className="mt-8 space-y-6">
						<Step
							number="01"
							title="Discovery & Alignment"
							body="We define the objective, audience, constraints, and what success actually looks like. This step prevents building the wrong thing beautifully."
						/>
						<Step
							number="02"
							title="Structure & Messaging"
							body="We map the page flow and information hierarchy so the site communicates clearly. This is where most “conversion” wins are created."
						/>
						<Step
							number="03"
							title="Design for Trust"
							body="We translate the structure into a clean, professional presentation that matches the brand. Confident, calm, and easy to navigate."
						/>
						<Step
							number="04"
							title="Build & Implementation"
							body="Development is organized for scale: reusable patterns, clean structure, and a foundation that can grow without a rebuild."
						/>
						<Step
							number="05"
							title="Launch & Next Layer"
							body="We launch with a clear path forward: what to refine next, what to expand later, and how the platform can evolve with the business."
						/>
					</div>
				</section>

				{/* Working style / communication */}
				<section className="mt-14 grid gap-6 md:grid-cols-2 border-t border-[rgb(var(--border))] pt-14">
					<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
						<h2 className="text-xl font-semibold tracking-tight">
							Communication
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							You’ll get clear updates, direct answers, and no disappearing
							acts. I keep decisions documented and progress visible so the
							project stays calm and on track.
						</p>
						<ul className="mt-5 list-disc space-y-2 pl-6 text-[rgb(var(--muted))]">
							<li>Regular check-ins at key milestones</li>
							<li>Clear approvals before moving forward</li>
							<li>Direct feedback loops that prevent rework</li>
						</ul>
					</div>

					<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
						<h2 className="text-xl font-semibold tracking-tight">Timelines</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							Timelines depend on scope, content readiness, and approval speed,
							but the process is designed to keep momentum without rushing
							decisions.
						</p>
						<ul className="mt-5 list-disc space-y-2 pl-6 text-[rgb(var(--muted))]">
							<li>Small sites: typically a few weeks</li>
							<li>Rebuilds + positioning: often 3–6 weeks</li>
							<li>Platforms / MVPs: phased approach based on features</li>
						</ul>
					</div>
				</section>

				{/* FAQ */}
				<section className="mt-14 border-t border-[rgb(var(--border))] pt-14">
					<div className="max-w-3xl">
						<h2 className="text-2xl font-semibold tracking-tight">
							Common questions
						</h2>
						<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
							Short answers to the things clients usually ask before they
							commit.
						</p>
					</div>

					<div className="mt-10">
						<FrequentlyAskedQuestions
							items={[
								{
									q: "What do you need from me to start?",
									a: "A clear goal, any existing brand assets, and access to your current site (if this is a rebuild). If content isn’t ready, we can start with structure and fill it in deliberately.",
								},
								{
									q: "Do you offer ongoing support after launch?",
									a: "Yes. Many clients continue with improvements, new pages, and growth layers. The site is built to make that easy.",
								},
								{
									q: "Will I be involved in decisions?",
									a: "Yes, but you won’t be overwhelmed. I’ll bring clear options, recommendations, and the reasoning behind them so decisions feel simple.",
								},
								{
									q: "Can you work with a tight deadline?",
									a: "Sometimes. If the timeline requires cutting corners that would harm the outcome, I’ll tell you directly and propose a safer path.",
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
						If you want a site or platform that feels clear, credible, and built
						to evolve. Let’s talk.
					</p>
					<div className="mt-7">
						<CTAButton href="/contact">Start a project</CTAButton>
					</div>
				</section>
			</main>
		</Container>
	);
}
