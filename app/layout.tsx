import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ideal Factory — Villa Interiors Made Simple",
  description:
    "Kitchens, closets, doors, and premium uPVC windows designed, manufactured, and installed by one trusted Emirati factory.",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "Ideal Factory — Villa Interiors Made Simple",
    description:
      "Kitchens, closets, doors, and premium uPVC windows designed, manufactured, and installed by one trusted Emirati factory.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
