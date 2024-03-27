import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Culturin Analytics",
  description: "Data analysis and insights from a world of culture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SNT0YQBRJ8"
        ></Script>
        <Script id="google-analytics">
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SNT0YQBRJ8');
  `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
