import FadeInSection from "@/components/ui/FadeInSection";

const proof = [
	{
		title: "Born To Ride",
		type: "Nonprofit website",
		outcome:
			"Built to grow community participation and make event info easy to find fast.",
		bullets: [
			"Clear calls-to-action",
			"Mobile-first layout",
			"Easy-to-update structure",
		],
		liveUrl: "https://borntoridepleasantontx.org",
		liveLabel: "View Live Site",
		caseStudyHref: "/work/born-to-ride",
	},
	{
		title: "Cheerful Calculations",
		type: "Service business website",
		outcome:
			"Designed to build trust quickly and convert visitors into consult requests.",
		bullets: [
			"Simple service positioning",
			"Strong homepage flow",
			"Clean, readable content",
		],
		liveUrl: "https://cheerfulcalculations.com",
		liveLabel: "View Live Site",
		caseStudyHref: "/work/cheerful-calculations",
	},
	{
		title: "Forever Home",
		type: "Product MVP (Preview)",
		outcome:
			"An MVP built for speed: discover pets, save favorites, and iterate toward a full experience.",
		bullets: [
			"User-friendly flow",
			"Scalable foundation",
			"In progress toward full usability",
		],
		liveUrl: "https://klb-dev.github.io/foreverHome/",
		liveLabel: "View MVP Preview",
		caseStudyHref: "/work/forever-home",
	},
];

export default function ProofSection() {
	return (
		<section className="py-20 md:py-24 bg-(--bbd-bg) text-(--bbd-fg)">
			<FadeInSection>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
					<p className="tracking-[0.18em] text-xs uppercase opacity-60 mb-4">
						Proof
					</p>

					<h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] mb-6">
						Real builds. Real clarity.
					</h2>

					<p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-80">
						Explore a few projects to see the work in action — and the thinking
						behind it.
					</p>
				</div>
			</FadeInSection>

			<div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 grid gap-4 md:grid-cols-3">
				{proof.map((item) => (
					<FadeInSection key={item.title}>
						<div className="h-full rounded-3xl p-7 border border-(--bbd-border) bg-(--bbd-card)">
							<div className="text-left">
								<p className="text-xs uppercase tracking-[0.16em] opacity-60 mb-3">
									{item.type}
								</p>

								<h3 className="text-xl font-semibold mb-3">{item.title}</h3>

								<p className="opacity-80 leading-relaxed">{item.outcome}</p>

								<ul className="mt-5 space-y-2">
									{item.bullets.map((b) => (
										<li key={b} className="text-sm opacity-75 flex gap-2">
											<span aria-hidden="true" className="mt-0.5">
												•
											</span>
											<span>{b}</span>
										</li>
									))}
								</ul>

								<div className="mt-7 flex flex-wrap gap-3">
									<a
										href={item.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										{item.liveLabel}
									</a>

									<a href={item.caseStudyHref} className="btn btn-outline">
										Case Study
									</a>
								</div>
							</div>
						</div>
					</FadeInSection>
				))}
			</div>
		</section>
	);
}
