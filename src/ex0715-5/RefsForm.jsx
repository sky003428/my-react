import { useRef } from 'react';

function RefsForm() {
    const inputEl = useRef(null);
    const divEl = useRef(null);
    const pEl = useRef(null);

    return (
        <>
            <p ref={pEl}>222</p>
            <input type="text" ref={inputEl} />
            <button
                onClick={() => {
                    inputEl.current.focus();
                }}
            >
                focus
            </button>
            <button
                onClick={() => {
                    inputEl.current.blur();
                    console.log(inputEl);
                }}
            >
                blur
            </button>
            <button
                onClick={() => {
                    const el = pEl.current;
                    // const el = document.createElement('p');
                    // el.innerHTML = inputEl.current.value;
                    divEl.current.appendChild(el);
                }}
            >
                show
            </button>
            <div ref={divEl}></div>
        </>
    );
}

export default RefsForm;
