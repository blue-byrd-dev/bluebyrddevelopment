import Container from "./Container";

export default function Footer() {
	return (
		<footer className="border-t border-[rgb(var(--border))]">
			<Container>
				<div className="flex flex-col gap-3 py-10 text-sm text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
					<p>
						© {new Date().getFullYear()} Blue Byrd Development. Boutique solo
						studio.
					</p>
					<p className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent2))]" />
						Built for speed. Designed to convert.
					</p>
				</div>
			</Container>
		</footer>
	);
}
