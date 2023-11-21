export const metadata = {
  title: 'ZenStudio',
  description: 'Zen Page to rest or focus in your work',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
