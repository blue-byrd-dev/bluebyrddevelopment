import Hero from "@/components/Hero";
import SectionBridge from "@/components/ui/SectionBridge";
import WhatWeDo from "@/components/WhatWeDo";
import ProofSection from "@/components/ProofSection";

export default function HomePage() {
	return (
		<main>
			<Hero />
			<SectionBridge />
			<WhatWeDo />
			<ProofSection />
		</main>
	);
}
