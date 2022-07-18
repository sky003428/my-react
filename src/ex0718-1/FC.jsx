import React, { useState, useEffect, Fragment } from 'react';

const initState = () => {
    console.log('FC-模擬constructor');
    return 0;
};

function FC(props) {
    const { children, ...others } = props;
    const [count, setCount] = useState(initState());
    useEffect(() => {
        console.log('FC-模擬didMount');
    }, []);

    return (
        <Fragment>
            {console.log('FC-render')}
            <h1>FC</h1>
            <h4>{count}</h4>
            {React.createElement('div', { ...others }, children)}
        </Fragment>
    );
}

export default FC;
