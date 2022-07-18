import { useState, Fragment } from 'react';

function Control() {
    const [inputV, setInputV] = useState('');
    const [textAreaV, setTextAreaV] = useState('');
    const [gender, setGender] = useState('');

    const genderOption = ['Male', 'Female', 'Secret'];

    return (
        <>
            <form name="form1">
                <h1>Form表單</h1>
                <h4>Input</h4>
                <input
                    value={inputV}
                    onChange={(e) => {
                        setInputV(e.target.value);
                    }}
                />
                <p>value:{inputV}</p>
                <h4>TextArea</h4>
                <textarea
                    value={textAreaV}
                    onChange={(e) => {
                        setTextAreaV(e.target.value);
                    }}
                />
                <p>value:{textAreaV}</p>

                <h4>Radio Group</h4>
                <div>
                    {genderOption.map((v, i) => {
                        return (
                            <Fragment key={i}>
                                <input
                                    type="radio"
                                    value={v}
                                    checked={v === gender}
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                    }}
                                    id={v}
                                />
                                <label for={v}>{v}</label>
                            </Fragment>
                        );
                    })}
                </div>
            </form>
        </>
    );
}

export default Control;
