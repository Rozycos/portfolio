import type { Metadata } from "next";
import { Inter, Ubuntu, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const ubuntu = Ubuntu({
  weight: ['300' ,'400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const pixelify_sans = Pixelify_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfolio App | PixelCrafter.eu",
  description: "My personal portfolio app",
};

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ubuntu.variable} ${pixelify_sans.variable}`}>{children}</body>
    </html>
  )
}
