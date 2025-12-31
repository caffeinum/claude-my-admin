import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  metadataBase: new URL('https://postgres-drizzle.vercel.app'),
  title: 'myAdmin - Modern Admin Dashboard',
  description:
    'Full-featured admin dashboard with Next.js 15 and PostgreSQL. Features drag-and-drop widgets, real-time analytics, user management, and AI-powered chat assistant.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
