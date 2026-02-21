import Hero from "@/components/sections/Hero";
import SectionBridge from "@/components/ui/SectionBridge";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ProofSection from "@/components/sections/ProofSection";

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
