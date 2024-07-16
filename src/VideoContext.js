import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    const addVideo = (video) => {
        setVideos([...videos, video]);
    };

    const deleteVideo = (index) => {
        console.log(`Deleting video at index: ${index}`); // Adicione este log para depuração
        setVideos(videos.filter((_, i) => i !== index));
    };

    const editVideo = (index, newVideo) => {
    setVideos(videos.map((video, i) => (i === index ? newVideo : video)));
};


    return (
        <VideoContext.Provider value={{ videos, addVideo, deleteVideo, editVideo }}>
            {children}
        </VideoContext.Provider>
    );
};
