import Link from "next/link";

type Props = {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "ghost";
};

export default function CTAButton({
	href,
	children,
	variant = "primary",
}: Props) {
	const base =
		"inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition " +
		"focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--bg))]";

	const styles =
		variant === "primary"
			? "bg-[rgb(var(--fg))] text-[rgb(var(--bg))] hover:opacity-90"
			: "border border-[rgb(var(--border))] bg-transparent hover:bg-[rgb(var(--card))]";

	return (
		<Link className={`${base} ${styles}`} href={href}>
			{children}
		</Link>
	);
}
