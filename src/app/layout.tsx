import { Syne, Syne_Mono, Unbounded } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-syne-mono",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-unbounded",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${syneMono.variable} ${unbounded.variable}`}>
        {children}
      </body>
    </html>
  );
}