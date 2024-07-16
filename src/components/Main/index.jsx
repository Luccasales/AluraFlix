import React, { useContext } from 'react';
import { VideoContext } from '../../VideoContext';
import Card from 'components/Card';
import styles from './Main.module.css';

function Main() {
    const { videos, deleteVideo, editVideo } = useContext(VideoContext);

    const renderVideos = (category) => {
        return videos
            .filter(video => video.categoria === category)
            .map((video, index) => (
                <Card
                    key={index}
                    titulo={video.titulo}
                    capa={video.imagem}
                    url={video.video}
                    onDelete={() => deleteVideo(index)}
                    onEdit={(newVideo) => editVideo(index, newVideo)}
                />
            ));
    };

    return (
        <div className={styles.topic}>
            <div className={`${styles.texto} ${styles.front} ${styles.espaco}`} id="1">
                <h2>Front End</h2>
                {renderVideos('frontEnd')}
            </div>
            <div className={`${styles.texto} ${styles.back} ${styles.espaco}`} id="2">
                <h2>Back End</h2>
                {renderVideos('backEnd')}
            </div>
            <div className={`${styles.texto} ${styles.mobile} ${styles.espaco}`} id="3">
                <h2>Mobile</h2>
                {renderVideos('mobile')}
            </div>
        </div>
    );
}

export default Main;
