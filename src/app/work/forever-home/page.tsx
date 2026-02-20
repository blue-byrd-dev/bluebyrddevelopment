// src/app/work/forever-home/page.tsx
import {
	CaseStudyBackLink,
	CaseStudyFooter,
	CaseStudyHeader,
	CaseStudyList,
	CaseStudySection,
	CaseStudyShell,
	SnapshotCard,
} from "@/components/case-study/CaseStudy";

export const metadata = {
	title: "Forever Home Case Study | Blue Byrd Development",
	description:
		"A case study on architecting a scalable MVP adoption platform with clear product structure and long-term growth considerations.",
};

export default function ForeverHomePage() {
	return (
		<CaseStudyShell>
			<CaseStudyBackLink />

			<CaseStudyHeader
				kicker="Product MVP · Adoption Platform"
				title="Forever Home"
				lede="Architecting an MVP adoption platform with a scalable foundation — designed to support authentication, personalization, and future shelter engagement without turning into a spaghetti product later."
			/>

			<SnapshotCard
				outcomes={[
					"Structured MVP foundation",
					"Scalable user account system",
					"Expansion-ready product architecture",
				]}
			>
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">What it is</p>
						<p>
							Forever Home is a modern pet discovery and adoption concept built
							to help users browse, favorite, and engage with adoptable pets —
							with a foundation for accounts, syncing, and future messaging.
						</p>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">Live site</p>
						<p className="text-[rgb(var(--muted))]">
							Private / in active development
						</p>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">Engagement type</p>
						<p>MVP structure, product foundation, and scalable architecture</p>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">
							Primary objective
						</p>
						<p>Build a usable MVP that can evolve into a platform</p>
					</div>
				</div>
			</SnapshotCard>

			<div className="mt-6 divide-y divide-[rgb(var(--border))]">
				<CaseStudySection title="The Problem">
					<p>
						Most MVPs fail for predictable reasons: unclear scope, weak product
						structure, and early decisions that quietly block growth later.
					</p>
					<CaseStudyList
						items={[
							"The product needed to feel simple for users while supporting real future complexity behind the scenes.",
							"Personalization (favorites, saved searches, account syncing) had to be planned early — not bolted on later.",
							"The foundation needed a clear path to future engagement: inquiries, messaging, and shelter workflows.",
						]}
					/>
					<p className="mt-4">
						The risk wasn’t building something “too small.” The risk was
						building something that couldn’t grow.
					</p>
				</CaseStudySection>

				<CaseStudySection title="The Approach">
					<p>
						The approach prioritized product structure first — then
						implementation.
					</p>
					<CaseStudyList
						items={[
							"Defined a clean MVP scope: discovery, detail views, and favoriting with a clear user journey.",
							"Designed authentication and identity strategy to support both guest use and long-term account value.",
							"Structured the data model so user actions can sync and extend without rewriting core flows.",
							"Built with expansion in mind: messaging and inquiries as natural next layers, not awkward add-ons.",
						]}
					/>
					<p className="mt-4">
						The goal was a foundation that stays coherent as features expand.
					</p>
				</CaseStudySection>

				<CaseStudySection title="The Result" highlight>
					<p>
						Forever Home is positioned as a real MVP — usable today, designed
						for what comes next.
					</p>
					<CaseStudyList
						items={[
							"A clear user experience designed around adoption intent",
							"Scalable structure for accounts, personalization, and syncing",
							"A foundation ready for deeper engagement features without rebuilding the core product",
						]}
					/>
				</CaseStudySection>

				<CaseStudySection title="Next Steps">
					<p>
						The platform can evolve depending on the business goal: engagement,
						retention, or shelter integration.
					</p>
					<CaseStudyList
						items={[
							"Saved searches and alerts to improve retention",
							"User inquiries and messaging tied to specific pets",
							"Shelter profiles and workflow support",
							"Analytics around engagement and adoption intent",
						]}
					/>
				</CaseStudySection>
			</div>

			<CaseStudyFooter />
		</CaseStudyShell>
	);
}
