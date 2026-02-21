import FadeInSection from "@/components/ui/FadeInSection";

const cards = [
	{ title: "Performance", desc: "Fast loads, clean code, smart structure." },
	{ title: "Clarity", desc: "Messaging and layout that converts." },
	{ title: "Maintainability", desc: "Built to grow without becoming fragile." },
];

const WhatWeDo = () => {
	return (
		<section className="relative pt-18 pb-16 md:pt-25 md:pb-18 bg-(--bbd-bg) text-(--bbd-fg)">
			<FadeInSection>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
					<p className="tracking-[0.18em] text-xs uppercase opacity-60 mb-4">
						What we do
					</p>

					<h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] mb-6">
						Clean builds. Clear outcomes.
					</h2>

					<p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-80">
						We design and engineer performance-first websites that load fast,
						look sharp, and guide users to take action.
					</p>

					<div className="mt-12 grid gap-4 md:grid-cols-3 text-left">
						{cards.map((card) => (
							<div
								key={card.title}
								className="
                  rounded-2xl p-6
                  border border-(--bbd-border)
                  bg-(--bbd-card)
                "
							>
								<h3 className="font-semibold mb-2">{card.title}</h3>
								<p className="opacity-80 text-sm">{card.desc}</p>
							</div>
						))}
					</div>
				</div>
			</FadeInSection>
		</section>
	);
};

export default WhatWeDo;
