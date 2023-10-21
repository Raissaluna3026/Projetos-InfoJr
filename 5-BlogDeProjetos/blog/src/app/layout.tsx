
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'
import { createClient } from '@/prismicio'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
  
  const settings = await client.getSingle("configuracoes");


  return {
    title: settings.data.titulo_site || "Blog Primisc",
    description: settings.data.meta_descricao || "descrição de algo aqui",
    openGraph: {
      images: [settings.data.any_imagem.url || ""],
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
        
        <Header />
        {children}
        <Footer/>
      
      </body>
    </html>
  )
}
