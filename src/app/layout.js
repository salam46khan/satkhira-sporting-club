import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satkhira Sporting Club",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark'>
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
