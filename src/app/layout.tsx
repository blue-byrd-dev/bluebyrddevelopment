import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/provider/ThemeProvider";
import ToastProvider from "@/components/provider/ToastProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.bluebyrddevelopment.com"),
	title: {
		default: "Blue Byrd Development",
		template: "%s",
	},
	description:
		"Boutique solo dev studio building modern websites and digital platforms for nonprofits, startups, agencies, and small businesses.",
	openGraph: {
		title: "Blue Byrd Development",
		description:
			"Boutique solo dev studio building modern websites and digital platforms for nonprofits, startups, agencies, and small businesses.",
		url: "https://bluebyrddevelopment.com",
		siteName: "Blue Byrd Development",
		images: [
			{
				url: "/og/default-og.png",
				width: 1200,
				height: 630,
				alt: "Blue Byrd Development",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blue Byrd Development",
		description:
			"Boutique solo dev studio building modern websites and digital platforms for nonprofits, startups, agencies, and small businesses.",
		images: ["/og/default-og.jpg"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider>
					<ToastProvider />
					<Navbar />
					<main className="min-h-[70vh]">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
