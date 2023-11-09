import { useEffect, useState } from 'react';
import styles from '../app/page.module.css';
import axios from 'axios';
import Cards from './cards';


export default function fila(){

  
  async function sendPutRequest(id: any) {
    try {
      const response = await axios.put('http://localhost:3000/api/atender', {
        id: id,
        naFila: false
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }



    const [clients, setClients] = useState([]);
    const valorPao = 0.5;

    useEffect(() => {
    axios.get('http://localhost:3000/api/fila')
      .then(res => {
        setClients(res.data);
        console.log(clients)
      })
      .catch(err => console.error(err));
    }, [clients]);


    const [visivel, setVisivel] = useState(false);

    const handleClick = () => {
        setVisivel(!visivel);
    };

    const [nome, setNome] = useState('');
    const [totalPaes, setTotalPaes] = useState(0);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    };
    return(
    <>
      <Cards nClients={clients.length} />
        <div className={styles.pessoasNaFila}>
            <p className={styles.adicionarPessoas} onClick={handleClick}><strong>+ Adicionar pessoas a fila</strong></p>
            {clients && clients.map(client => (
              <div key={client.id} className={styles.parteBranca}>
                <div className={styles.cliente}>
                  <p ><strong>{client.name}</strong>
                  </p>
                  <div className={styles.paes}>
                    <p><strong>Total de pães:</strong> {client.paes}</p>
                    <p><strong>Total a pagar:</strong> R$ {client.paes * valorPao}</p>
                  </div>
                </div>
                <div>
                  <img onClick={() => sendPutRequest(client.id)} src="\logo\Icon (1).svg" alt="" />
                </div>
              </div>
            ))}

        </div>
        {visivel && (
            <div className={styles.fundo} id='fundo'>
              <form className={styles.modal} onSubmit={handleSubmit}>
                <strong>Adicionar pessoas a fila</strong>
                <div className={styles.inputs}>
                  <input className={styles.inp} type="text" placeholder='Nome completo do cliente: ' value={nome} onChange={(e) => setNome(e.target.value)}/>
                  <input className={styles.inp} type="number" placeholder='Total de pães: ' value={totalPaes} onChange={(e) => setTotalPaes(Number(e.target.value))}/>
                </div>
                <div className={styles.botoes}>
                  <button className={styles.but2} type="submit">Enviar</button>
                  <button className={styles.but} onClick={() => setVisivel(false)}>Cancelar</button>
                </div>
              </form>
            </div>
        )}
    </>
    )
}