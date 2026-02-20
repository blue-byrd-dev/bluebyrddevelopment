// src/components/case-study/CaseStudy.tsx
import Link from "next/link";

export function CaseStudyShell({ children }: { children: React.ReactNode }) {
	return (
		<main className="mx-auto w-full max-w-4xl px-6 py-16">{children}</main>
	);
}

export function CaseStudyBackLink() {
	return (
		<Link
			href="/work"
			className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
		>
			← Back to Work
		</Link>
	);
}

export function CaseStudyHeader({
	kicker,
	title,
	lede,
}: {
	kicker: string;
	title: string;
	lede: string;
}) {
	return (
		<header className="space-y-6">
			<div className="space-y-3">
				<p className="text-sm uppercase tracking-wide text-[rgb(var(--muted))]">
					{kicker}
				</p>
				<h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
				<p className="text-lg leading-relaxed opacity-90">{lede}</p>
			</div>
		</header>
	);
}

export function SnapshotCard({
	children,
	outcomes,
}: {
	children: React.ReactNode;
	outcomes?: string[];
}) {
	return (
		<section className="mt-8 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
			<h2 className="text-base font-semibold">Snapshot</h2>

			<div className="mt-4">{children}</div>

			{outcomes && outcomes.length > 0 && (
				<div className="mt-6 border-t border-[rgb(var(--border))] pt-6">
					<p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
						Key Outcomes
					</p>

					<ul className="mt-3 space-y-2 text-sm">
						{outcomes.map((o) => (
							<li key={o} className="flex gap-2">
								<span className="text-[rgb(var(--accent))]">•</span>
								<span>{o}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
}

export function CaseStudySection({
	title,
	children,
	highlight = false,
}: {
	title: string;
	children: React.ReactNode;
	highlight?: boolean;
}) {
	return (
		<section className="py-10">
			<div className="flex items-baseline justify-between gap-4">
				<h2 className="text-xl font-semibold tracking-tight">{title}</h2>
				<div className="h-px flex-1 bg-[rgb(var(--border))] opacity-70" />
			</div>

			<div
				className={[
					"mt-5 text-base leading-relaxed opacity-95",
					highlight
						? "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
						: "",
				].join(" ")}
			>
				{children}
			</div>
		</section>
	);
}

export function CaseStudyList({ items }: { items: string[] }) {
	return (
		<ul className="mt-4 list-disc space-y-2 pl-6">
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

export function CaseStudyFooter() {
	return (
		<footer className="mt-12 border-t border-[rgb(var(--border))] pt-8">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-sm text-[rgb(var(--muted))]">
					Explore the rest of the work.
				</p>
				<Link
					href="/work"
					className="underline underline-offset-4 hover:opacity-90"
				>
					Back to Work →
				</Link>
			</div>
		</footer>
	);
}
