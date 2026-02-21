import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { getProject, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({
	params,
}: {
	params: { slug: string };
}) {
	const project = getProject(params.slug);
	if (!project) return notFound();

	return (
		<Container>
			<div className="py-14">
				<p className="text-sm font-semibold text-[rgb(var(--accent))]">
					Case Study
				</p>
				<h1 className="mt-2 text-3xl font-bold">{project.name}</h1>
				<p className="mt-3 max-w-2xl text-[rgb(var(--muted))]">
					{project.summary}
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-2">
					<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
						<h2 className="font-semibold">Problem</h2>
						<p className="mt-2 text-sm text-[rgb(var(--muted))]">
							{project.problem}
						</p>
					</div>
					<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
						<h2 className="font-semibold">Solution</h2>
						<p className="mt-2 text-sm text-[rgb(var(--muted))]">
							{project.solution}
						</p>
					</div>
				</div>

				<div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
					<h2 className="font-semibold">Results</h2>
					<ul className="mt-3 list-disc pl-5 text-sm text-[rgb(var(--muted))]">
						{project.results.map((r) => (
							<li key={r}>{r}</li>
						))}
					</ul>
				</div>

				<div className="mt-10">
					<CTAButton href="/contact">Build something like this</CTAButton>
				</div>
			</div>
		</Container>
	);
}
