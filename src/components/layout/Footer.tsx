// import Link from "next/link";
import Container from "../ui/Container";
import FooterNav from "@/components/layout/FooterNav";

export default function Footer() {
	return (
		<footer className="border-t border-[rgb(var(--border))]">
			<Container>
				<div className="py-10">
					<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
						{/* Brand */}
						<div className="flex items-center gap-3">
							<img
								src="/images/BBD-Logo.webp"
								alt="Blue Byrd Development"
								className="h-10 w-auto"
								loading="lazy"
							/>
							<div className="text-sm text-[rgb(var(--muted))]">
								<p className="font-semibold text-[rgb(var(--fg))]">
									Blue Byrd Development
								</p>
								<p>Boutique solo studio.</p>
							</div>
						</div>
						{/* Mobile footer nav (appears only at bottom) */}
						<FooterNav />
					</div>

					{/* Bottom line */}
					<div className="mt-8 flex flex-col gap-3 border-t border-[rgb(var(--border))] pt-6 text-sm text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
						<p>© {new Date().getFullYear()} Blue Byrd Development.</p>

						<p className="flex items-center gap-2">
							<span
								className="h-1.5 w-1.5 rounded-full"
								style={{ background: "var(--bbd-accent)" }}
							/>
							Built for speed. Designed to convert.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
}
