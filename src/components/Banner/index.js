import { Link } from "react-router-dom";
import styles from "./Banner.module.css";
import player from "./player-home.png"

function Banner({ imagem }) {
    return (
        <>
            <div className={styles.capa}
                style={{ backgroundImage: `url('/imagens/Banner-${imagem}.png')` }}></div>
            <div className={styles.espaco}>
                <div className={styles.texto}>
                    <h2>SEO com React</h2>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel.
                        Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
                </div>
                <Link to="./" className={styles.player}>
                <img src={player} alt="rodape aluraflix" className={styles.player} />
            </Link>
            </div>
        </>
    );
}

export default Banner;
