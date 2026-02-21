"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/components/nav/NavItems";

type Props = {
	targetSelector?: string;
};

export default function FooterNav({ targetSelector = "footer" }: Props) {
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState(false);

	const active = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname?.startsWith(href);
	};

	useEffect(() => {
		const target = document.querySelector(targetSelector);
		if (!target) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{
				root: null,
				rootMargin: "0px 0px -25% 0px",
				threshold: 0.01,
			},
		);

		observer.observe(target);
		return () => observer.disconnect();
	}, [targetSelector]);

	return (
		<nav aria-label="Footer navigation" className="md:hidden">
			<div
				className={[
					"flex items-center justify-center gap-x-1",
					"whitespace-nowrap overflow-x-auto",
					"text-sm",
					"transition-all duration-500 ease-out",
					"motion-reduce:transition-none",
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
				].join(" ")}
			>
				{navItems.map((item, idx) => (
					<span key={item.href} className="inline-flex items-center">
						<Link
							href={item.href}
							className="transition-colors"
							style={{
								color: active(item.href) ? "var(--bbd-fg)" : "var(--bbd-muted)",
								textDecoration: active(item.href) ? "underline" : "none",
								textUnderlineOffset: "3px",
							}}
						>
							{item.label}
						</Link>

						{idx < navItems.length - 1 && (
							<span
								aria-hidden="true"
								className="mx-2"
								style={{ color: "var(--bbd-border)" }}
							>
								·
							</span>
						)}
					</span>
				))}
			</div>
		</nav>
	);
}
