import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkPage() {
	return (
		<Container>
			<div className="py-14">
				<h1 className="text-3xl font-bold">Work</h1>
				<p className="mt-3 max-w-2xl text-[rgb(var(--muted))]">
					Real builds, practical outcomes, and foundations that scale.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{projects.map((p) => (
						<Link
							key={p.slug}
							href={`/work/${p.slug}`}
							className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 transition hover:-translate-y-0.5"
						>
							<h3 className="font-semibold">{p.name}</h3>
							<p className="mt-2 text-sm text-[rgb(var(--muted))]">
								{p.summary}
							</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{p.tags.map((t) => (
									<span
										key={t}
										className="rounded-full border border-[rgb(var(--border))] px-2 py-1 text-xs text-[rgb(var(--muted))]"
									>
										{t}
									</span>
								))}
							</div>
							<p className="mt-5 text-sm font-semibold text-[rgb(var(--accent))]">
								View case study →
							</p>
						</Link>
					))}
				</div>

				<div className="mt-10">
					<CTAButton href="/contact">Start a project</CTAButton>
				</div>
			</div>
		</Container>
	);
}
