import ReactDOMClient from 'react-dom/client';
import App from './components/App';
import React from 'react';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <App />
);

