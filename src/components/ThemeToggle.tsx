"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border"
			style={{
				borderColor: "var(--bbd-border)",
				background: "var(--bbd-card)",
				color: "var(--bbd-fg)",
			}}
			aria-label="Toggle theme"
		>
			{isDark ? "☀️" : "🌙"}
		</button>
	);
}
