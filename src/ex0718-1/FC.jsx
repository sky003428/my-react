import React, { useState, useEffect, Fragment, useRef } from 'react';

const initState = () => {
    console.log('FC-模擬constructor');
    return 0;
};

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function FC(props) {
    const { children, ...others } = props;
    const [count, setCount] = useState(initState());
    const [styleObj, setStyleObj] = useState({ opacity: 0.5 });

    const prevCount = usePrevious(count);

    useEffect(() => {
        console.log('FC-模擬didMount');
        setStyleObj({ opacity: 1 });
        return () => {
            setStyleObj({ opacity: 0 });
        };
    }, []);
    useEffect(() => {
        console.log(
            'FC-模擬didMount+didUpdate total:',
            count,
            'Prev total: ',
            prevCount
        );
    }, [count]);
    useEffect(() => {
        if (count !== 0) {
            console.log('FC-模擬didUpdate total:', count);
        }
    }, [count]);

    useEffect(() => {
        const resizeFunc = () => {
            console.log('resize');
        };
        window.addEventListener('resize', resizeFunc);

        return () => {
            window.removeEventListener('resize', resizeFunc);
        };
    });

    return (
        <Fragment>
            {console.log('FC-render')}
            <h1 style={{ transition: '1s', ...styleObj }}>FC</h1>
            <h4
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {count}
            </h4>
            {React.createElement('div', { ...others }, children)}
        </Fragment>
    );
}

export default FC;
