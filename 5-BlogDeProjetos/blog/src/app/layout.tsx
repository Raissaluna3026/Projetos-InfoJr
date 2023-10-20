
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'
import { createClient } from '@/prismicio'

const nunito = Nunito({
  subsets: ['latin'],
  variable:'--font-nunito',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable:'--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  
  const page = await client.getSingle("configuracoes");


  return {
    title: page.data.titulo_site || "Blog Primisc",
    description: page.data.meta_descricao || "descrição de algo aqui",
    openGraph: {
      images: [page.data.any_imagem.url || ""],
    },
  }
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body >
        
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
      
      </body>
    </html>
  )
}
