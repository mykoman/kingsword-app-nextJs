import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Aside } from "./components/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kingsword Abuja App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Aside />
          
          {/* Main content */}
          <main className="flex-1 bg-gray-100 p-6">
           
            {children}</main>
        </div>
      </body>
    </html>
  );
}
