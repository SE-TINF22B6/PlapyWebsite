import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plapy",
  description: "Website for the Plapy Discord Bot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-black h-full w-full">
        <body className="bg-black h-full w-full">{children}</body>
      </html>
    </ClerkProvider>
  )
}


