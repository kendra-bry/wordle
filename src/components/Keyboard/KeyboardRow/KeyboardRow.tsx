import Key from '../Key/Key';
import './KeyboardRow.css';
import { IKeyValues } from '../Key/Key';

export interface IKeyboardProps {
    row: IKeyValues[];
}

export default function KeyboardRow({ row }: IKeyboardProps) {
    return (
        <div className="KeyboardRow">
            {row.map((key: IKeyValues) => (
                <Key key={key.value} keyValues={key} />
            ))}
        </div>
    );
}
