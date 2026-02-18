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
		<header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur">
			<Container>
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center gap-2 font-semibold">
						<span className="inline-block h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
						Blue Byrd Development
					</Link>

					<nav className="hidden items-center gap-6 md:flex">
						{nav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
							>
								{item.label}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<ThemeToggle />
						<Link
							href="/contact"
							className="hidden rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-black hover:opacity-90 sm:inline-flex"
						>
							Book a Call
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
}
