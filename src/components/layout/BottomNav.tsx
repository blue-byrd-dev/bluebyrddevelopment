"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/work", label: "Work" },
	{ href: "/contact", label: "Contact" },
];

export default function BottomNav() {
	const pathname = usePathname();

	const active = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname?.startsWith(href);
	};

	return (
		<nav
			className="fixed inset-x-0 bottom-0 z-50 border-t md:hidden"
			style={{
				borderColor: "var(--bbd-border)",
				backgroundColor: "color-mix(in srgb, var(--bbd-bg) 88%, transparent)",
				backdropFilter: "blur(10px)",
			}}
			aria-label="Bottom navigation"
		>
			<div className="mx-auto flex max-w-4xl items-center justify-around px-4 py-3">
				{items.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="rounded-xl px-3 py-2 text-xs font-semibold transition-colors"
						style={{
							color: active(item.href) ? "var(--bbd-fg)" : "var(--bbd-muted)",
							background: active(item.href)
								? "color-mix(in srgb, var(--bbd-card) 85%, transparent)"
								: "transparent",
						}}
					>
						{item.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
