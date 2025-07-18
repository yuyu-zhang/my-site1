import type { Metadata } from "next";
import "./globals.css";

// ✅ 正确写法：只保留一个 metadata
export const metadata: Metadata = {
  title: "My Math Site",
  description: "Math formulas with KaTeX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
