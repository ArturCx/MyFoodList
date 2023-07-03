import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin']})

export const metadata = {
  title: 'My Food List',
  description: 'Lista pessoal de Bares e Restaurantes de meu interesse',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
