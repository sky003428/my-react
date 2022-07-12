import Child from './Child';
import { useState } from 'react';

function Parent() {
    const [text, setText] = useState('null');

    const profile = {
        name: 'david',
        age: 20,
    };
    return (
        <>
            <Child
                text="hello World"
                profile={profile}
                f01={() => {
                    alert('hello');
                }}
            />
            <Child text={text} />
            <button
                onClick={() => {
                    setText('hello World');
                }}
            >
                setText
            </button>
        </>
    );
}

export default Parent;
