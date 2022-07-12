function Child(props) {
    const { text, f01, profile } = props;

    return (
        <>
            <h1>{text === 'hello World' ? text : '沒有評論'}</h1>
            <p>Name:{profile.name}</p>
            <p>Age:{profile.age}</p>
            <button onClick={f01}>Click me</button>
        </>
    );
}

Child.defaultProps = {
    profile: {
        name: '',
        age: '',
    },
};

export default Child;
