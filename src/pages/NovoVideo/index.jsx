import React, { useState, useContext } from 'react';
import Botoes from 'components/Botoes';
import styles from './NovoVideo.module.css';
import { VideoContext } from '../../VideoContext';

function NovoVideo() {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('frontEnd');
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const { addVideo } = useContext(VideoContext);

    const limparFormulario = () => {
        setTitulo('');
        setCategoria('frontEnd');
        setImagem('');
        setVideo('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addVideo({ titulo, categoria, imagem, video });
        limparFormulario();
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.titulo}>Novo vídeo</h1>
                <p className={styles.paragrafo}>Complete o formulário para criar um novo card de vídeo</p>
            </div>
            <section className={styles.formulario}>
                <form onSubmit={handleSubmit}>
                    <label>Título</label>
                    <input
                        placeholder="Digite o título do vídeo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <label htmlFor="opcoes">Escolha a categoria:</label>
                    <select
                        id="opcoes"
                        name="opcoes"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="frontEnd">Front End</option>
                        <option value="backEnd">Back End</option>
                        <option value="mobile">Mobile</option>
                    </select>
                    <label>Imagem</label>
                    <input
                        placeholder="Digite a URL da imagem"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                    <label>Vídeo</label>
                    <input
                        placeholder="Digite a URL do vídeo"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                    />
                    <Botoes limparFormulario={limparFormulario} />
                </form>
            </section>
        </>
    );
}

export default NovoVideo;
