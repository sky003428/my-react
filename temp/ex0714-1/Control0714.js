import { useState, Fragment } from 'react';
import Select from 'react-select';

function Control0714() {
    const [inputV, setInputV] = useState('');
    const [textAreaV, setTextAreaV] = useState('');
    const [gender, setGender] = useState('');
    const [car, setCar] = useState('');
    const [food, setFood] = useState([]);

    const genderOption = ['Male', 'Female', 'Secret'];
    const carOption = ['Audi', 'Benz', 'Toyota'];
    const foodOption = ['香蕉', '西瓜', '芭樂'];

    const [optionV, setOptionV] = useState({ value: '', label: '' });
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <>
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
                                name={v}
                            />
                            <label htmlFor={v}>{v}</label>
                        </Fragment>
                    );
                })}
            </div>
            <h4>Select</h4>
            <div>
                <select
                    value={car}
                    onChange={(e) => {
                        setCar(e.target.value);
                    }}
                >
                    <option value={''} disabled>
                        請選擇
                    </option>

                    {carOption.map((v, i) => {
                        return (
                            <option key={i} value={v}>
                                {v}
                            </option>
                        );
                    })}
                </select>
            </div>

            <Select options={options} onChange={setOptionV} />
            <h4>我的選擇:{JSON.stringify(optionV)}</h4>
            <h4>我的選擇:{optionV.value}</h4>

            <br />
            <div>
                <h4>Checkbox(複選)</h4>
                {foodOption.map((v, i) => {
                    return (
                        <div key={i}>
                            <input
                                type="checkbox"
                                value={v}
                                // checked={.includes(v)}
                                onChange={(e) => {
                                    if (food.includes(e.target.value)) {
                                        setFood((pre) => {
                                            return pre.filter((val) => {
                                                return val !== e.target.value;
                                            });
                                        });
                                    } else {
                                        const newArr = [...food];
                                        newArr.push(e.target.value);
                                        setFood(newArr);
                                    }
                                }}
                            />
                            <label>{v}</label>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Control0714;
