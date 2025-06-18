import type React from "react"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>MARRÓN.dev - Portfolio</title>
        <meta
          name="description"
          content="Multi-talented development team specializing in web development, design, and digital solutions"
        />
      </head>
      <body className="overflow-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
