import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/header'

import { headers } from "next/headers";
import { isMobileDevice } from "../utils/deviceDetection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swamp Paradise",
  description: "Trans Rights",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Check device type
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = isMobileDevice(userAgent);

  return isMobile == false ? (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full background-image">
        <Header></Header>
        <div className="page-content">
          {children}
        </div>
        
        </body>
    </html>
  ) :
  (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full background-image">
        {/* <Header></Header> */}
        <div className="page-content">
          {children}
        </div>
        
        </body>
    </html>
  )
}
