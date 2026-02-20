type Props = {
	height?: string; // tailwind height class
};

// export default function SectionBridge({ height = "h-12 md:h-16" }: Props) {
// 	return (
// 		<div
// 			aria-hidden="true"
// 			className={`relative ${height} bg-(--bbd-bg) overflow-hidden`}
// 		>
// 			{/* fade from hero navy into page bg */}
// 			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0d152a,rgba(13,21,42,0))]" />
// 		</div>
// 	);
// }

export default function SectionBridge({ height = "h-12 md:h-16" }) {
	return (
		<div
			aria-hidden="true"
			className={`relative ${height} bg-(--bbd-bg) overflow-hidden`}
		>
			{/* main fade */}
			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0d152a,rgba(13,21,42,0))]" />

			{/* subtle brand glow */}
			<div
				className="
          absolute left-1/2 top-0 -translate-x-1/2
          h-16 w-[70%]
          rounded-full blur-2xl opacity-20
          bg-(--bbd-secondary)
        "
			/>
		</div>
	);
}
