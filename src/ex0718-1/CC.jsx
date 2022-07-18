import React, { Component } from 'react';

class CC extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        console.log('CC-constructor');
    }
    componentDidMount() {
        console.log('CC-didMount');
    }
    render() {
        console.log('CC-render');
        return (
            <>
                <h1>CC</h1>
                <h2
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}
                >
                    {this.state.count}
                </h2>
            </>
        );
    }
}

export default CC;
