import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IndigoStudio',
  description: 'Indigo Studio',
  keywords: ['indigo', 'studio'],
  creator: 'Indigo',
  formatDetection:{
    email: 'indigo_studio@163.com',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
