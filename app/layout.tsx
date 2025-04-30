import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata: Metadata = {
    title: "TypeScript",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header text="TypeScript - Free Code Camp" />
                <main className="container">{children}</main>
                <Footer your_name="Nuru" started_year="2025" />
            </body>
        </html>
    );
}
