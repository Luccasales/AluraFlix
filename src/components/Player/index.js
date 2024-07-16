import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./player.module.css";

function Player() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const videoUrl = queryParams.get('videoUrl');
    const capaUrl = queryParams.get('capa');
    const videoId = new URL(videoUrl).searchParams.get('v'); // Para URLs do YouTube

    return (
        <div className={styles.container}>
            {videoId ? (
                <iframe
                    width="100%"
                    height="auto"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <video controls width="100%" height="auto" poster={capaUrl}>
                    <source src={videoUrl} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            )}
        </div>
    );
}

export default Player;
