import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Davide Dal Cero",
  description: "Data Scientist & AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050505] antialiased">
        {children}
      </body>
    </html>
  );
}
