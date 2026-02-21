import Link from "next/link";

type Props = {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "ghost";
	className?: string;
};

export default function CTAButton({
	href,
	children,
	variant = "primary",
	className = "",
}: Props) {
	const styles = variant === "primary" ? "btn btn-primary" : "btn btn-outline";

	return (
		<Link href={href} className={`${styles} ${className}`}>
			{children}
		</Link>
	);
}
