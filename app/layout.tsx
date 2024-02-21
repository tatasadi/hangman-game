import type { Metadata } from "next"
import "./globals.css"
import Attribution from "@/components/attribution"

export const metadata: Metadata = {
  title: "Hangman Game",
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
      <body className="bg-dark-navy font-mouse-memoirs text-white">
        <div className="relative mx-auto flex min-h-screen w-full max-w-[90rem] flex-col items-center justify-center bg-[url('../public/background-mobile.svg')] bg-cover bg-no-repeat sm:bg-[url('../public/background-tablet.svg')] lg:bg-[url('../public/background-desktop.svg')]">
          {children}
          <Attribution />
        </div>
      </body>
    </html>
  )
}
