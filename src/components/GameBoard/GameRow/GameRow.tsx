import './GameRow.css';
import GameTile from '../GameTile/GameTile';
import { componentRepeater } from '../../../utilities/helper';

export interface IKeyboardProps {
    tileCount: number;
}

export default function GameBoard({ tileCount }: IKeyboardProps) {
    return <div className="GameRow">{componentRepeater(<GameTile />, tileCount)}</div>;
}
