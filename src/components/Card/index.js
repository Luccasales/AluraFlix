import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconeEditar from "./iconeEditar.png";
import iconeExcluir from "./iconeExcluir.png";
import Modal from "components/Modal";
import Botoes from "components/Botoes";

function Card({ titulo, capa, url, onDelete, onEdit }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editTitulo, setEditTitulo] = useState(titulo);
    const [editCategoria, setEditCategoria] = useState("");
    const [editImagem, setEditImagem] = useState(capa);
    const [editVideo, setEditVideo] = useState(url);

    const handleDelete = () => {
        onDelete();
    };

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        onEdit({ titulo: editTitulo, categoria: editCategoria, imagem: editImagem, video: editVideo });
        closeModal();
    };

    const limparFormulario = () => {
        setEditTitulo(titulo);
        setEditCategoria("");
        setEditImagem(capa);
        setEditVideo(url);
    };

    return (
        <div className={styles.card}>
            <Link to={`/player?videoUrl=${encodeURIComponent(url)}&capa=${encodeURIComponent(capa)}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
            </Link>
            <h3 className={styles.titulo}>{titulo}</h3>
            {url && (
                <div className={styles.iconContainer}>
                    <img src={iconeEditar} alt="editar" className={styles.iconeEditar} onClick={handleEdit} />
                    <img src={iconeExcluir} alt="excluir" className={styles.iconeExcluir} onClick={handleDelete} />
                </div>
            )}
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <h2>Editar Vídeo</h2>
                    <form onSubmit={handleSave}>
                        <label>Título</label>
                        <input
                            placeholder="Digite o título do vídeo"
                            value={editTitulo}
                            onChange={(e) => setEditTitulo(e.target.value)}
                        />
                        <label htmlFor="opcoes">Escolha a categoria:</label>
                        <select
                            id="opcoes"
                            name="opcoes"
                            value={editCategoria}
                            onChange={(e) => setEditCategoria(e.target.value)}
                        >
                            <option value="frontEnd">Front End</option>
                            <option value="backEnd">Back End</option>
                            <option value="mobile">Mobile</option>
                        </select>
                        <label>Imagem</label>
                        <input
                            placeholder="Digite a URL da imagem"
                            value={editImagem}
                            onChange={(e) => setEditImagem(e.target.value)}
                        />
                        <label>Vídeo</label>
                        <input
                            placeholder="Digite a URL do vídeo"
                            value={editVideo}
                            onChange={(e) => setEditVideo(e.target.value)}
                        />
                        <Botoes limparFormulario={limparFormulario} />
                    </form>
                </Modal>
            )}
        </div>
    );
}

export default Card;
