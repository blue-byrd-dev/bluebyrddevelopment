"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import ThemeToggle from "../ui/ThemeToggle";

const nav = [
	{ href: "/services", label: "Services" },
	{ href: "/work", label: "Work" },
	{ href: "/process", label: "Process" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();

	const [open, setOpen] = useState(false);
	const [hidden, setHidden] = useState(false);

	// Close menu on route change
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	// Esc to close
	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") setOpen(false);
		}
		if (open) window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);

	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 768px)"); // Tailwind md
		const update = () => setIsDesktop(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	// Scroll hide/show behavior
	useEffect(() => {
		// Desktop should never auto-hide
		if (isDesktop) {
			setHidden(false);
			return;
		}

		let lastY = window.scrollY;
		let idleTimer: number | undefined;

		const onScroll = () => {
			// If menu is open, keep nav visible
			if (open) return;

			const y = window.scrollY;
			const delta = y - lastY;

			// Always show at the very top
			if (y < 8) {
				setHidden(false);
				lastY = y;
				return;
			}

			// Hide on scroll down, show on scroll up
			if (delta > 14) setHidden(true);
			else if (delta < -8) setHidden(false);

			// Stay visible longer before hiding again
			if (idleTimer) window.clearTimeout(idleTimer);
			idleTimer = window.setTimeout(() => {
				setHidden(true);
			}, 2000);

			lastY = y;
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (idleTimer) window.clearTimeout(idleTimer);
		};
	}, [open, isDesktop]);

	const isActive = useMemo(() => {
		return (href: string) => {
			if (href === "/") return pathname === "/";
			return pathname?.startsWith(href);
		};
	}, [pathname]);

	return (

		<header
			className={[
				"fixed left-0 right-0 top-0 z-50 border-b backdrop-blur",
				"transition-transform duration-300 will-change-transform",
				hidden ? "-translate-y-full" : "translate-y-0",
			].join(" ")}
			style={{
				borderColor: "var(--bbd-border)",
				backgroundColor: "color-mix(in srgb, var(--bbd-bg) 80%, transparent)",
			}}
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

					{/* Desktop nav */}
					<nav className="hidden items-center gap-6 md:flex">
						{nav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={[
									"text-sm transition-colors",
									isActive(item.href)
										? "text-(--bbd-fg)"
										: "text-(--bbd-muted) hover:text-(--bbd-fg)",
								].join(" ")}
							>
								{item.label}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<ThemeToggle />

						{/* Desktop CTA */}
						<Link
							href="/contact"
							className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
							style={{
								background: "var(--bbd-accent)",
								color: "var(--bbd-accent-fg)",
								boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
							}}
						>
							Start a project
						</Link>

						{/* Mobile hamburger */}
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-xl border px-3 py-2 md:hidden"
							style={{
								borderColor: "var(--bbd-border)",
								backgroundColor:
									"color-mix(in srgb, var(--bbd-card) 80%, transparent)",
							}}
							aria-label={open ? "Close menu" : "Open menu"}
							aria-expanded={open}
							onClick={() => setOpen((v) => !v)}
						>
							<span className="sr-only">
								{open ? "Close menu" : "Open menu"}
							</span>
							<div className="grid gap-1">
								<span
									className="block h-0.5 w-5"
									style={{ background: "var(--bbd-fg)" }}
								/>
								<span
									className="block h-0.5 w-5"
									style={{ background: "var(--bbd-fg)" }}
								/>
								<span
									className="block h-0.5 w-5"
									style={{ background: "var(--bbd-fg)" }}
								/>
							</div>
						</button>
					</div>
				</div>
			</Container>

			{/* Mobile menu */}
			{open && (
				<div className="md:hidden">
					{/* overlay */}
					<div
						className="fixed inset-0 z-40"
						onClick={() => setOpen(false)}
						aria-hidden="true"
						style={{ background: "rgba(0,0,0,0.35)" }}
					/>
					{/* panel */}
					<div
						className="relative z-50 border-t"
						style={{
							borderColor: "var(--bbd-border)",
							background: "var(--bbd-bg)",
						}}
					>
						<Container>
							<div className="py-4">
								<nav className="grid gap-2">
									{nav.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={[
												"rounded-xl px-4 py-3 text-sm font-medium transition-colors",
												isActive(item.href)
													? "text-(--bbd-fg)"
													: "text-(--bbd-muted) hover:text-(--bbd-fg)",
											].join(" ")}
											style={{
												background:
													"color-mix(in srgb, var(--bbd-card) 70%, transparent)",
											}}
										>
											{item.label}
										</Link>
									))}
								</nav>

								<div className="mt-4">
									<Link
										href="/contact"
										className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
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
					</div>
				</div>
			)}
		</header>
	);
}
