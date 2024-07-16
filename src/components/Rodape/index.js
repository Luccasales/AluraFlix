import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';
import rodape from './rodape.png'

function Rodape(){
    return(
        <footer className={styles.rodape}>
            <Link to="./">
                <img src={rodape} alt="rodape aluraflix" className={styles.rodape} />
            </Link>
        </footer>
    )
}

export default Rodape;