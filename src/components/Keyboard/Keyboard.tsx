import './Keyboard.css';
import KeyboardRow from './KeyboardRow/KeyboardRow';

export interface IKeyboardProps {}

const rowValues = {
    top: [
        { value: 'Q', isLetter: true },
        { value: 'W', isLetter: true },
        { value: 'E', isLetter: true },
        { value: 'R', isLetter: true },
        { value: 'T', isLetter: true },
        { value: 'Y', isLetter: true },
        { value: 'U', isLetter: true },
        { value: 'I', isLetter: true },
        { value: 'O', isLetter: true },
        { value: 'P', isLetter: true },
    ],
    middle: [
        { value: 'A', isLetter: true },
        { value: 'S', isLetter: true },
        { value: 'D', isLetter: true },
        { value: 'F', isLetter: true },
        { value: 'G', isLetter: true },
        { value: 'H', isLetter: true },
        { value: 'J', isLetter: true },
        { value: 'K', isLetter: true },
        { value: 'L', isLetter: true },
    ],
    bottom: [
        { value: 'DELETE', isLetter: false },
        { value: 'Z', isLetter: true },
        { value: 'X', isLetter: true },
        { value: 'C', isLetter: true },
        { value: 'V', isLetter: true },
        { value: 'B', isLetter: true },
        { value: 'N', isLetter: true },
        { value: 'M', isLetter: true },
        { value: 'ENTER', isLetter: false },
    ],
};

export default function Keyboard(props: IKeyboardProps) {
    return (
        <div className="Keyboard">
            <KeyboardRow row={rowValues.top} />
            <KeyboardRow row={rowValues.middle} />
            <KeyboardRow row={rowValues.bottom} />
        </div>
    );
}
