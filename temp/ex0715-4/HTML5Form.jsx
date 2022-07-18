import { useState } from 'react';

function HTML5Form(props) {
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [invalidErr, setInvalidErr] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        // 先阻擋預設送出行為
        e.preventDefault();

        // 這裡可以得到目前輸入的值
        // 第一種方式: 從狀態得到
        console.log(userData);

        // 第二種方式: 用FormData物件
        const formData = new FormData(e.target);

        console.log(
            formData.get('fullName'),
            formData.get('email'),
            formData.get('password')
        );

        // 作更多驗証

        // 送到伺服器(fetch/ajax)
    };

    const handleInvalid = (e) => {
        e.preventDefault();

        console.log(e.target.validationMessage);
        setInvalidErr({
            ...invalidErr,
            [e.target.name]: e.target.validationMessage,
        });
    };

    const handleValid = (e) => {
        setInvalidErr({ ...invalidErr, [e.target.name]: '' });
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                onInvalid={handleInvalid}
                onChange={handleValid}
            >
                <label>姓名</label>
                <input
                    type="text"
                    name="fullName"
                    required
                    value={userData.fullName}
                    onChange={handleChange}
                />
                <span>{invalidErr.fullName}</span>
                <br />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
                <span>{invalidErr.email}</span>
                <br />
                <label>密碼</label>
                <input
                    type="text"
                    name="password"
                    required
                    minLength={6}
                    value={userData.password}
                    onChange={handleChange}
                />
                <span>{invalidErr.password}</span>
                <br />
                <button type="submit">送出</button>
            </form>
        </>
    );
}

export default HTML5Form;
