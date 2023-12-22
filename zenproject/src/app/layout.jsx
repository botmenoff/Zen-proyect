
export const metadata = {
  title: 'Zenproject',
  description: 'Its meant to be a project where you can save the time that you have spent doing some task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
