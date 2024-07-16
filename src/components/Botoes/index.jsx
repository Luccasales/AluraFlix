import React from "react";
import styles from "./Botoes.module.css";

function Botoes({ limparFormulario }) {
    const aoClicarGuardar = (evento) => {
        
        console.log("Formulário foi submetido");
    };

    const aoClicarLimpar = (evento) => {
        evento.preventDefault();
        limparFormulario();
        console.log("Formulário limpo");
    };

    return (
        <div className={styles.buttons}>
            <button type="submit" id="1" onClick={aoClicarGuardar}>
                Guardar
            </button>
            <button type="button" id="2" onClick={aoClicarLimpar}>
                Limpar
            </button>
        </div>
    );
}

export default Botoes;
