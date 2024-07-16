import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';
import CabecalhoLink from '../CabecalhoLink';

function Cabecalho() {
    return (
        <header className={styles.container}>
            <Link to="./">
                <img src={logo} alt="logo do aluraflix" className={styles.logo} />
            </Link>
            <nav>
                <div className={styles.buttonGroup}>
                    <CabecalhoLink url="./">
                        <button className={styles.button}>Home</button>
                    </CabecalhoLink>
                    <CabecalhoLink url= "./NovoVideo">
                        <button className={styles.button}>Novo video</button>
                    </CabecalhoLink>
                </div>
            </nav>
        </header >
    )
}

export default Cabecalho;