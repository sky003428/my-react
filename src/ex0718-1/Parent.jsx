import { useState, useCallback } from 'react';
import FC from './FC';

function Parent() {
    const [isShow, setIsShow] = useState(true);
    const [isDis, setIsDis] = useState(false);

    const delaySetIsShow = () => {
        setIsDis(true);
        setTimeout(() => {
            setIsShow(!isShow);
        }, 1000);
    };

    return (
        <>
            {isShow && <FC style={{ }} />}
            <button onClick={() => delaySetIsShow()}>
                {isShow === true ? 'disable' : 'show'}
            </button>
        </>
    );
}

export default Parent;
