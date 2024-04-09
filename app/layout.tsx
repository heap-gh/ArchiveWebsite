import "./styles/layout.css"

export const metadata = {
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Application</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
