import './GameSettings.css';

export interface IGameSettingsProps {}

export default function GameSettings(props: IGameSettingsProps) {
    return (
        <div className="Settings">
            <h3>SETTINGS</h3>
            <div className="Setting">
                <label htmlFor="numGuess">Number of Guesses:</label>
                <input type="number" id="numGuess" />
            </div>
            <div className="Setting">
                <label htmlFor="wordLength">Word Length:</label>
                <input type="number" id="wordLength"/>
            </div>
        </div>
    );
}
