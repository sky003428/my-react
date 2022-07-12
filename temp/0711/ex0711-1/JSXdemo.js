import { Fragment } from 'react';

function JSXdemo() {
    return (
        <Fragment>
            <h1>JSX各種資料呈現方式</h1>
            <h2>運算</h2>
            {192 - 1}
            <h2>字串</h2>
            {'hello'}
            <h2>布林值(不會顯示)</h2>
            {true}
            {false}
            <h2>null&undefined(不會顯示)</h2>
            {null}
            {undefined}
            <h2>陣列</h2>
            {[1, 2, 3, 4]}
            {[1, 2, 3, 4].join('')}
            <h2>物件</h2>
            {JSON.stringify({ name: 'david', age: 20 })}
        </Fragment>
    );
}

export default JSXdemo;
