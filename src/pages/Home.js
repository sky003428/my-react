import React from 'react';
import { useNavigate } from 'react-router-dom'

function Home(props) {
    const { auth, setAuth } = props;
    const navigate = useNavigate();
    return (
        <>
            <div>Home</div>
            <button
                onClick={() => {
                    setAuth(!auth);
                    alert('歡迎登入!');
                    navigate('/about', { replace: true });
                }}
            >
                {!auth ? 'SignIn' : 'Logout'}
            </button>
        </>
    );
}

export default Home;
