// src/app/work/cheerful-calculations/page.tsx
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
	title: "Cheerful Calculations Case Study | Blue Byrd Development",
	description:
		"A case study on transforming a bookkeeping brand into a trust-driven positioning system designed to attract remote clients.",
};

export default function C2Page() {
	return (
		<CaseStudyShell>
			<CaseStudyBackLink />

			<CaseStudyHeader
				kicker="Service Brand · Bookkeeping"
				title="Cheerful Calculations"
				lede="Transforming a service-based bookkeeping brand into a clear, trust-driven positioning system designed to attract remote clients — with an emphasis on restaurants and operationally complex small businesses."
			/>

			<SnapshotCard
				outcomes={[
					"Sharper service positioning",
					"Improved trust and credibility",
					"Clearer conversion path for prospects",
				]}
			>
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">What it is</p>
						<p>
							Cheerful Calculations provides bookkeeping and financial
							organization for restaurants and small businesses that want clean,
							reliable numbers and calm, consistent support.
						</p>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">Live site</p>
						<a
							href="https://cheerfulcalculations.com"
							target="_blank"
							rel="noreferrer"
							className="underline underline-offset-4"
						>
							cheerfulcalculations.com
						</a>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">Engagement type</p>
						<p>Brand clarity, structure, and conversion-focused messaging</p>
					</div>

					<div className="space-y-1">
						<p className="text-sm text-[rgb(var(--muted))]">
							Primary objective
						</p>
						<p>
							Increase trust, improve clarity, and support client acquisition
						</p>
					</div>
				</div>
			</SnapshotCard>

			<div className="mt-6 divide-y divide-[rgb(var(--border))]">
				<CaseStudySection title="The Problem">
					<p>
						The service was strong — but the presentation didn’t do it justice.
						The brand needed to feel established, confident, and easy to trust
						in the first 15 seconds.
					</p>
					<CaseStudyList
						items={[
							"Messaging was too general, which made differentiation harder — especially for restaurant bookkeeping.",
							"The site didn’t guide prospects through a clear decision path.",
							"The structure didn’t scale well for future service expansion, content, or proof.",
						]}
					/>
					<p className="mt-4">
						This wasn’t a “design refresh.” It was a positioning and trust
						problem.
					</p>
				</CaseStudySection>

				<CaseStudySection title="The Approach">
					<p>
						The strategy focused on clarity, credibility, and making the
						prospect’s next step obvious.
					</p>
					<CaseStudyList
						items={[
							"Refined positioning to speak directly to restaurant operations: sales, vendors, payroll, tips, and fluctuating costs.",
							"Built a clean narrative flow: what you do → who it’s for → why it works → what happens next.",
							"Designed the structure to support future proof (testimonials, mini case examples, before/after cleanups) without rewriting the site.",
							"Kept the tone calm and professional — confident without pressure.",
						]}
					/>
				</CaseStudySection>

				<CaseStudySection title="The Result" highlight>
					<p>
						Cheerful Calculations now presents as a stable, trustworthy service
						built for business owners who want clarity — not chaos.
					</p>
					<CaseStudyList
						items={[
							"Clearer positioning with a stronger “why you” message",
							"A more direct conversion path from interest to contact",
							"Flexible structure for future growth and proof layers",
						]}
					/>
					<p className="mt-4">
						The site now supports credibility and client acquisition instead of
						just “being online.”
					</p>
				</CaseStudySection>

				<CaseStudySection title="Next Steps">
					<p>
						Next layers can deepen trust, improve lead quality, and reduce
						friction for qualified prospects.
					</p>
					<CaseStudyList
						items={[
							"Service package pages with clear outcomes and boundaries",
							"Proof system: mini case examples, testimonials, and FAQs",
							"Lead qualification form to filter serious inquiries",
							"Newsletter or resource funnel for long-term visibility",
						]}
					/>
				</CaseStudySection>
			</div>

			<CaseStudyFooter />
		</CaseStudyShell>
	);
}
