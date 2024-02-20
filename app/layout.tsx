import type { Metadata } from "next"
import "./globals.css"
import Reference from "@/components/Reference"

export const metadata: Metadata = {
  title: "Body Mass Index Calculator",
  description: "A Frontend Mentor challenge solution.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className="font-mouse-memoirs bg-dark-navy flex min-h-screen flex-col items-center justify-center text-gunmetal text-white">
        {children}
        <Reference />
      </body>
    </html>
  )
}
