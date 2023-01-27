import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../src/assets/styles/styles.scss"
import "./assets/fonts/HelveticaNeueLTGEO-55Roman.otf";
import "./assets/fonts/HelveticaNeueLTGEO-MT-55Roman.ttf";
import "./assets/fonts/Helvetica-Neue-LT-Com-65-Medium.ttf";
import "./assets/fonts/HelveticaNeueLTGEO-75Bold.otf";
import {TranslationContextProvider} from "./contexts/TranslationContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TranslationContextProvider>
          <App />
      </TranslationContextProvider>
  </React.StrictMode>
);