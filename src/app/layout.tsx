import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Blue Byrd Development",
	description:
		"Boutique solo dev studio for nonprofits, startups, agencies, and small business.",
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
					<Navbar />
					<main className="min-h-[70vh]">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
