import * as React from 'react';

const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
};

export interface Props {
    name: string;
    /** the specified enthusiasm level */
    enthusiasmLevel?: number;
    /** function that increments the number of exclamation marks */
    onIncrement?: () => void;
    /** function that decrements the number of exclamation marks */
    onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if(enthusiasmLevel <= 0) {
        throw new Error('You could be WAY more enthusiastic.');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Hello;
