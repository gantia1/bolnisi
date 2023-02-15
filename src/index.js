import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../src/assets/styles/styles.scss"
import "./assets/fonts/HelveticaNeueLTGEO-55Roman.otf";
import "./assets/fonts/HelveticaNeueLTGEO-MT-55Roman.ttf";
import "./assets/fonts/Helvetica-Neue-LT-Com-65-Medium.ttf";
import "./assets/fonts/HelveticaNeueLTGEO-75Bold.otf";
import "./components/i18n/i18n"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);