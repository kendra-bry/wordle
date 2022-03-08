import './Key.css';

export interface IKeyValues {
    value: string;
    isLetter: boolean;
}

export interface IKeyProps {
    keyValues: IKeyValues;
}

const Key = ({ keyValues }: IKeyProps) => {
    return <div className={`Key ${keyValues.isLetter ? 'LetterKey' : 'BiggerKey'}`}> {keyValues.value}</div>;
};

export default Key;
