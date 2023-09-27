import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import path from "path";

const dinNext = localFont({
  src: [
    {
      path: "../assets/fonts/dinnext-light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/dinnext.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/dinnext-bold.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/dinnext-bold.ttf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "Salla - Online Shopping",
  description:
    "Salla is the all-in-one e-commerce platform for merchants of all sizes. Grow your business faster with our easy-to-use tools and features, including a customizable storefront, powerful marketing tools, and seamless integrations with popular payment and shipping providers. Start your free trial today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${dinNext.className} text-base`}>{children}</body>
    </html>
  );
}
