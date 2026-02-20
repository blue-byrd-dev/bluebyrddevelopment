import FadeInSection from "./ui/FadeInSection";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
	return (
		<section
			className="
        hero relative
        min-h-[calc(100vh-4rem)]
        pt-24 pb-28 md:pt-32 md:pb-32
        flex flex-col items-center justify-center md:justify-start
        text-center
        text-(--bbd-text-dark)
        bg-[radial-gradient(ellipse_at_top,#1a2a4f,#0d152a_60%)]
      "
		>
			<FadeInSection>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 hero-fade space-y-8 md:space-y-10">
					{/* Bird Logo + Halo */}
					<div className="relative">
						<div
							className="
                absolute -inset-6 rounded-full blur-2xl
                bg-(--bbd-secondary)
                halo-pulse
              "
							aria-hidden="true"
						/>
						<img
							src="/images/bbdLogo-bird.webp"
							alt="Blue Byrd Development Bird Logo"
							className="
                w-28 sm:w-32 md:w-40
                relative z-10 mx-auto
                drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]
              "
						/>
					</div>

					{/* Micro Label */}
					<p className="tracking-[0.18em] text-xs sm:text-sm uppercase opacity-80">
						Boutique Web Studio
					</p>

					{/* Headline */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
						Modern Web Development
						<span className="block text-(--bbd-accent)">that Soars</span>
					</h1>

					{/* Supporting Copy */}
					<p className="max-w-xl text-lg sm:text-xl leading-relaxed opacity-80">
						Fast, scalable websites for nonprofits, startups, and small
						businesses. Built with clean architecture and intentional design.
					</p>

					{/* CTAs */}
					<div className="flex flex-wrap justify-center gap-4">
						<a href="#send-signal" className="btn btn-primary">
							Get in Touch
							<FaArrowRight className="ml-2" />
						</a>

						<a href="#sites-that-soar" className="btn btn-outline">
							View Our Work
						</a>
					</div>
				</div>
			</FadeInSection>
		</section>
	);
};

export default Hero;
