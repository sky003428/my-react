function ChildB(props) {
    return (
        <>
            <h1>ChildB</h1>
            <button
                onClick={() => {
                    props.setDataFromB('childB data');
                }}
            >
                Send data to Parent2
            </button>
        </>
    );
}

export default ChildB;
