import "@radix-ui/themes/styles.css"
import type { Metadata } from "next"
import "./globals.css"
import { Theme } from "@radix-ui/themes"

export const metadata: Metadata = {
  title: "sheakelly.au",
  description: "sheakelly.au",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="en">
    <body>
      <Theme accentColor="blue">{children}</Theme>
    </body>
  </html>
)

export default RootLayout
