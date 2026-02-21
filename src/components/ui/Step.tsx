type StepProps = {
	number: string;
	title: string;
	body: string;
	className?: string;
};

export default function Step({
	number,
	title,
	body,
	className = "",
}: StepProps) {
	return (
		<div
			className={`rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-7 ${className}`}
		>
			<div className="grid gap-6 sm:grid-cols-[220px_1fr] sm:items-start">
				{/* Left column */}
				<div>
					<p className="text-sm font-semibold text-[rgb(var(--muted))]">
						{number}
					</p>
					<h3 className="mt-1 text-xl font-semibold tracking-tight">{title}</h3>
				</div>

				{/* Right column */}
				<p className="leading-relaxed text-[rgb(var(--muted))]">{body}</p>
			</div>
		</div>
	);
}
