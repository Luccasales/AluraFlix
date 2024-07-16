import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { VideoProvider } from './VideoContext'; // Ajuste o caminho conforme necessário
import AppRoutes from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoProvider>
      <AppRoutes/>
    </VideoProvider>
  </React.StrictMode>
);
