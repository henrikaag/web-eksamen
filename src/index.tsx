import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameProvider from './contexts/GameContext';
import CharacterProvider from './contexts/CharacterContext';
import EquipmentProvider from './contexts/EquipmentContext';
import WorldProvider from './contexts/WorldContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameProvider>
      <CharacterProvider>
        <EquipmentProvider>
          <WorldProvider>
            <App/>
          </WorldProvider>
        </EquipmentProvider>
      </CharacterProvider>
    </GameProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
