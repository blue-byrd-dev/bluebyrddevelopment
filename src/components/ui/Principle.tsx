type PrincipleProps = {
	title: string;
	body: string;
	className?: string;
};

export default function Principle({
	title,
	body,
	className = "",
}: PrincipleProps) {
	return (
		<div
			className={`rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 ${className}`}
		>
			<h3 className="text-lg font-semibold tracking-tight">{title}</h3>
			<p className="mt-2 leading-relaxed text-[rgb(var(--muted))]">{body}</p>
		</div>
	);
}
