import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'
import '@/styles/globals.css'
import { Manrope } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world.',
}

const manrope = Manrope({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
