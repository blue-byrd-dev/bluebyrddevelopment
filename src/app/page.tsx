import Hero from "@/components/sections/Hero";
import SectionBridge from "@/components/ui/SectionBridge";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ProofSection from "@/components/sections/ProofSection";

export const metadata = {
	title: "Blue Byrd Development | Modern Web Development for Small Business",
	description:
		"Blue Byrd Development builds modern websites and digital platforms for small businesses, nonprofits, and growing brands with strategy, clarity, and scalable structure.",
};

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
