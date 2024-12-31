import { Inter } from 'next/font/google'
import { cn } from './lib/utils'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }) {
  return (
    <div 
      className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}
    >
      {children}
    </div>
  )
}
