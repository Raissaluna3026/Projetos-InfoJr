import { useEffect, useState } from 'react';
import styles from '../app/page.module.css';
import axios from 'axios';
import Cards from './cards';


export default function fila(){

  //atualizando o status dos clientes da fila (funçao da lixeira)
  async function sendPutRequest(id: number) {
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

  async function createClient(name: string, paes: number) {
    try {
      const response = await axios.post('http://localhost:3000/api/cadastro', {
        name: name,
        paes: paes
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }



  //chamado a rota que retorna os clientes e q atraves do map serão jogados na tela 
    const [clients, setClients] = useState([]);
    const valorPao = 0.5;

    useEffect(() => {
    axios.get('http://localhost:3000/api/fila')
      .then(res => {
        setClients(res.data);
      })
      .catch(err => console.error(err));
    }, [clients]);

  //modal
    const [visivel, setVisivel] = useState(false);

    const handleClick = () => {
        setVisivel(!visivel);
    };
    //tentativa de enviar os dados do input para o banco de dados
    const [nome, setNome] = useState('');
    const [totalPaes, setTotalPaes] = useState(0);

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
              <form className={styles.modal} >
                <strong>Adicionar pessoas a fila</strong>
                <div className={styles.inputs}>
                  <input className={styles.inp} type="text" placeholder='Nome completo do cliente: ' value={nome} onChange={(e) => setNome(e.target.value)}/>
                  <input className={styles.inp} type="number" placeholder='Total de pães: ' value={totalPaes} onChange={(e) => setTotalPaes(Number(e.target.value))}/>
                </div>
                <div className={styles.botoes}>
                  <button className={styles.but2} type="submit" onClick={() => createClient(nome, totalPaes)}>Enviar</button>
                  <button className={styles.but} onClick={() => setVisivel(false)}>Cancelar</button>
                </div>
              </form>
            </div>
        )}
    </>
    )
}