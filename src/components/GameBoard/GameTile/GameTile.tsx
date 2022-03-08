import './GameTile.css';

export interface IKeyboardProps {
    value?: string;
}

export default function GameTile({ value }: IKeyboardProps) {
    return <div className="Tile">A</div>;
}
