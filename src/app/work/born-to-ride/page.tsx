// src/app/work/born-to-ride/page.tsx
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
	title: "Born To Ride Case Study | Blue Byrd Development",
	description:
		"A case study on repositioning a grassroots nonprofit into a scalable digital presence designed for sponsorship and community growth.",
};

export default function BtrPage() {
	return (
		<CaseStudyShell>
			<CaseStudyBackLink />

			<CaseStudyHeader
				kicker="Nonprofit · Community Mentorship"
				title="Born To Ride"
				lede="Repositioning a grassroots skateboarding nonprofit into a structured digital presence designed for sponsorship growth and long-term community expansion."
			/>

			<SnapshotCard
          outcomes={[
            "Clearer sponsorship alignment",
            "Stronger mission narrative",
            "Scalable structure for programs and fundraising",
          ]}
        >
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">What it is</p>
						<p>
							Born To Ride is a nonprofit skateboarding organization focused on
							mentorship, youth engagement, and community development through
							structured programs and events.
						</p>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">Live site</p>
						<a
							href="https://borntoridepleasantontx.org"
							target="_blank"
							rel="noreferrer"
							className="underline underline-offset-4"
						>
							borntoridepleasantontx.org
						</a>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">Engagement type</p>
						<p>Positioning, site rebuild, and growth-ready structure</p>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">
							Primary objective
						</p>
						<p>Establish credibility for sponsorship and grant readiness</p>
					</div>
				</div>
			</SnapshotCard>

			<div className="mt-6 divide-y divide-[rgb(var(--border))]">
				<CaseStudySection title="The Problem">
					<p>
						Born To Ride had real momentum in the community, but the digital
						presence didn’t reflect the depth of the mission or the potential
						for long-term growth.
					</p>
					<CaseStudyList
						items={[
							"The message wasn’t clear enough for sponsors, donors, or partners to quickly understand impact.",
							"The site functioned more like a landing page than an organization platform.",
							"Content structure didn’t support scaling programs, events, or fundraising.",
						]}
					/>
					<p className="mt-4">
						The need wasn’t “a new website.” It was a stronger structure that
						matched the organization’s real-world work.
					</p>
				</CaseStudySection>

				<CaseStudySection title="The Approach">
					<p>
						The rebuild started with clarity: who we’re speaking to, what the
						organization does, and what outcomes matter most.
					</p>
					<CaseStudyList
						items={[
							"Clarified positioning to speak to community, parents, and sponsors with equal confidence.",
							"Restructured the information architecture around programs, events, and impact.",
							"Built a foundation that can expand without rebuilding the entire site every time the organization grows.",
							"Focused on long-term credibility: consistent language, clean hierarchy, and practical paths to action.",
						]}
					/>
				</CaseStudySection>

				<CaseStudySection title="The Result" highlight>
					<p>
						Born To Ride now presents as an organization with direction and
						longevity — not just activity.
					</p>
					<CaseStudyList
						items={[
							"Clearer mission narrative that communicates impact quickly",
							"Stronger structure that supports sponsorship alignment",
							"A scalable foundation for expanding programs, events, and fundraising initiatives",
						]}
					/>
					<p className="mt-4">
						The site supports growth instead of limiting it.
					</p>
				</CaseStudySection>

				<CaseStudySection title="Next Steps">
					<p>
						The platform is positioned for future layers that deepen engagement
						and strengthen fundraising.
					</p>
					<CaseStudyList
						items={[
							"Sponsorship proposal and partner-ready pages",
							"Donor communication and campaign support",
							"Program registration flows and reporting",
							"Impact storytelling that can scale over time",
						]}
					/>
				</CaseStudySection>
			</div>

			<CaseStudyFooter />
		</CaseStudyShell>
	);
}
