export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial",
          background: "#f5f5f5",
        }}
      >
        {children}
      </body>
    </html>
  )
}
