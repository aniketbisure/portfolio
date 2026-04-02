import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Aniket Bisure - Personal Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/assets/img/logo.png",
    apple: "/assets/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
