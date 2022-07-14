function ChildA(props) {
    return (
        <>
            <h1>ChildA</h1>
            <p>parenData: {props.parenData}</p>
            <p>dataFromB: {props.dataFromB}</p>
        </>
    );
}

export default ChildA;
