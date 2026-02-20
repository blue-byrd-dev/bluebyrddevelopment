"use client";

import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const nav = [
	{ href: "/services", label: "Services" },
	{ href: "/work", label: "Work" },
	{ href: "/process", label: "Process" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	return (
		<header
			className="
			sticky top-0 z-50
			border-b
			bg-(--bbd-bg)/80
			backdrop-blur
			"
			style={{ borderColor: "var(--bbd-border)" }}
		>
			<Container>
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center gap-2 font-semibold">
						<img
							src="/images/BBD-Logo.webp"
							alt="Blue Byrd Development"
							className="h-12 w-auto"
						/>
					</Link>

					<nav className="hidden items-center gap-6 md:flex">
						{nav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm transition-colors text-(--bbd-muted) hover:text-(--bbd-fg)"
							>
								{item.label}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<ThemeToggle />

						<Link
							href="/contact"
							className="
                hidden sm:inline-flex items-center justify-center
                rounded-xl px-4 py-2 text-sm font-semibold
                transition-opacity
                hover:opacity-90
              "
							style={{
								background: "var(--bbd-accent)",
								color: "var(--bbd-accent-fg)",
								boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
							}}
						>
							Book a Call
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
}
