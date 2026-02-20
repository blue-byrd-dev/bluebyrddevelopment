import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkPage() {
	return (
		<Container>
			<div className="py-16">
				<header className="max-w-3xl">
					<p className="text-sm uppercase tracking-wide text-[rgb(var(--muted))]">
						Work & Case Studies
					</p>

					<h1 className="mt-3 text-4xl font-semibold tracking-tight">
						Building digital systems that support growth
					</h1>

					<p className="mt-4 text-lg leading-relaxed text-[rgb(var(--muted))]">
						A selection of work where clarity, structure, and long-term thinking
						shaped the outcome — not just the design.
					</p>

					<p className="mt-4 leading-relaxed text-[rgb(var(--muted))]">
						Each case study breaks down what needed to change, how the solution
						was approached, and what the work is positioned to support next.
					</p>
				</header>

				<section className="mt-12 space-y-6">
					{projects.map((p) => (
						<article
							key={p.slug}
							className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-7"
						>
							<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
								<div className="min-w-0">
									<h2 className="text-xl font-semibold tracking-tight">
										{p.name}
									</h2>

									{/* Optional: if you have a "type" or "industry" field in projects,
                      swap this line to use it. Otherwise tags works fine. */}
									<p className="mt-2 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
										{p.summary}
									</p>

									{p.tags?.length ? (
										<div className="mt-4 flex flex-wrap gap-2">
											{p.tags.map((t) => (
												<span
													key={t}
													className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs text-[rgb(var(--muted))]"
												>
													{t}
												</span>
											))}
										</div>
									) : null}
								</div>

								<div className="shrink-0">
									<Link
										href={`/work/${p.slug}`}
										className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2 text-sm font-semibold text-[rgb(var(--accent))] transition hover:opacity-90"
									>
										View case study →
									</Link>
								</div>
							</div>
						</article>
					))}
				</section>

				<section className="mt-14 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
					<h2 className="text-xl font-semibold tracking-tight">
						Ready to build something with structure?
					</h2>
					<p className="mt-3 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
						If you’re looking for a site or platform that feels clear, credible,
						and built to evolve — let’s talk.
					</p>

					<div className="mt-6">
						<CTAButton href="/contact">Start a project</CTAButton>
					</div>
				</section>
			</div>
		</Container>
	);
}
