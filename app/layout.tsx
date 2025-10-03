import type React from "react"
import type { Metadata } from "next"
import { Fredoka } from "next/font/google"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: "¿Qué planeta sos? - Quiz de Personalidad",
  description: "Descubrí qué planeta del sistema solar representa tu personalidad única",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={fredoka.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
