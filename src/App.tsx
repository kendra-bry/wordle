import React from 'react';
import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import GameBoard from './components/GameBoard/GameBoard';
import GameSettings from './components/GameSettings/GameSettings';

function App() {
    return (
        <div className="App">
            <GameSettings />
            <GameBoard rowCount={6} tileCount={5} />
            <Keyboard />
        </div>
    );
}

export default App;
