import { useState, useEffect, useRef } from 'react';
import './menu.css';

function State() {
    const a1 = useRef(null);
    const [active, setActive] = useState(null);

    // useEffect(() => {
    //     a1.current.querySelectorAll('a').forEach((e) => {
    //         e.style.outline = 'none';
    //     });
    //     a1.current.querySelectorAll('a')[active - 1].style.outline =
    //         '3px solid blue';
    //     console.log(a1.current.querySelectorAll('a'));
    // }, [active]);

    return (
        <ul ref={a1}>
            <h2>{active}</h2>
            <li
                onClick={() => {
                    setActive(1);
                }}
            >
                <a href="#/" className={active === 1 ? 'active' : ''}>
                    首頁
                </a>
            </li>
            <li
                onClick={() => {
                    setActive(2);
                }}
            >
                <a href="#/" className={active === 2 ? 'active' : ''}>
                    關於我們
                </a>
            </li>
            <li
                onClick={() => {
                    setActive(3);
                }}
            >
                <a href="#/" className={active === 3 ? 'active' : ''}>
                    產品
                </a>
            </li>
        </ul>
    );
}

export default State;
