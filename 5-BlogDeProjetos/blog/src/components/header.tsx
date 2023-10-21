import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';


export default async function Header(){

    const client = createClient();
  
    const settings = await client.getSingle("configuracoes");

    return <header>
        
    <Link href="/">
    {settings.data.titulo_site}
    </Link>
    
    

    <nav>
        <ul>
            {settings.data.navegacao.map(({link, label}) => (
                <li key={label}>
                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </ul>
    </nav>
    
    </header>


    
}