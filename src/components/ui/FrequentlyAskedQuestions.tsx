type FAQItem = {
	q: string;
	a: string;
};

type Props = {
	items: FAQItem[];
	className?: string;
};

export default function FrequentlyAskedQuestions({
	items,
	className = "",
}: Props) {
	return (
		<div className={`space-y-6 ${className}`}>
			{items.map((item) => (
				<div
					key={item.q}
					className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-7"
				>
					<h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
					<p className="mt-3 leading-relaxed text-[rgb(var(--muted))]">
						{item.a}
					</p>
				</div>
			))}
		</div>
	);
}
