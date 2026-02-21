"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
	return (
		<Toaster
			position="top-right"
			toastOptions={{
				duration: 4000,
				style: {
					borderRadius: "12px",
					padding: "14px 16px",
					fontSize: "14px",
				},
			}}
		/>
	);
}
