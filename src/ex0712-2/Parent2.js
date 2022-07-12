import ChildA from './ChildA';
import ChildB from './ChildB';

import { useState } from 'react';

function Parent2() {
    const [parenData] = useState('parent');
    const [dataFromB, setDataFromB] = useState('');

    return (
        <>
            <h1>Parent2</h1>
            <h4>dataFromB: {dataFromB}</h4>

            <ChildA parenData={parenData} dataFromB={dataFromB} />
            <ChildB setDataFromB={setDataFromB} />
        </>
    );
}

export default Parent2;
