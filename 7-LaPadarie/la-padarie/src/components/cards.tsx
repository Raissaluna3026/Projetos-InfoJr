import styles from '../app/page.module.css';


export default function cards(){
    return(
        <div className={styles.headerSection}>
            <div className={styles.pessoasFila}>
            <p>Pessoas na fila</p>
            <img src="\logo\Icon.svg" alt="" />
            </div>
            <div className={styles.paesVendidos}>
            <p>Pães vendidos</p>
            <img src="\logo\Group 1.svg" alt="" />
            </div>
            <div className={styles.entrada}>
            <p>Entrada</p>
            <img src="\logo\Group 2.svg" alt="" />
            </div>
        </div>
    )
}