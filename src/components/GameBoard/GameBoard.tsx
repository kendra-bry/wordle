import './GameBoard.css';
import GameRow from './GameRow/GameRow';
import { componentRepeater } from '../../utilities/helper';

export interface IGameProps {
    rowCount: number;
    tileCount: number;
}

export default function GameBoard({ rowCount, tileCount }: IGameProps) {
    return <div className="GameBoard">{componentRepeater(<GameRow tileCount={tileCount} />, rowCount)}</div>;
}
