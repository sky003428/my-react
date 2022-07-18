import { Fragment, useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';

function MultipleInput() {
    const [userData, setUserData] = useState({
        fullName: '',
        phone: '',
        email: '',
        gender: '',
        car: '',
        food: [],
    });

    const genderOptions = ['男', '女', '不提供'];
    const carOptions = ['Benz', 'BMW', 'Toyota'];
    const foodOption = ['香蕉', '西瓜', '芭樂'];
    useEffect(() => {
        console.log(cloneDeep(userData));
    }, [userData]);

    const handleChange = (e) => {
        console.log(e.target.type, e.target.name, e.target.value);
        //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    
    return (
        <Fragment>
            
            <label>姓名</label>
            <input
                name="fullName"
                type="text"
                value={userData.fullName}
                onChange={handleChange}
            />
            <br />
            <label>電話</label>
            <input
                name="phone"
                type="text"
                value={userData.phone}
                onChange={handleChange}
            />
            <br />
            <label>Email</label>
            <input
                name="email"
                type="text"
                value={userData.email}
                onChange={handleChange}
            />
            <br />
            <label>性別</label>
            {genderOptions.map((v, i) => {
                return (
                    <Fragment key={i}>
                        <input
                            name="gender"
                            type="radio"
                            checked={userData.gender === v}
                            value={v}
                            onChange={handleChange}
                        />
                        <label>{v}</label>
                    </Fragment>
                );
            })}
            <br />
            <label>喜好車子品牌</label>
            <select value={userData.car} name="car" onChange={handleChange}>
                <option value="">請選擇</option>
                {carOptions.map((v, i) => {
                    return (
                        <option key={i} value={v}>
                            {v}
                        </option>
                    );
                })}
            </select>
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
                                    if (
                                        userData.food.includes(e.target.value)
                                    ) {
                                        const newArr = [...userData.food];

                                        setUserData({
                                            ...userData,
                                            food: newArr.filter((val) => {
                                                return val !== e.target.value;
                                            }),
                                        });
                                    } else {
                                        const newArr = [...userData.food];
                                        newArr.push(e.target.value);
                                        setUserData({
                                            ...userData,
                                            food: newArr,
                                        });
                                    }
                                }}
                            />
                            <label>{v}</label>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
}

export default MultipleInput;