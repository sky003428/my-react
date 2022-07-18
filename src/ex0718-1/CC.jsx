import React, { Component } from 'react';

class CC extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        console.log('CC-constructor');
    }
    componentDidMount() {
        console.log('CC-didMount');
    }

    componentDidUpdate() {
        console.log('CC-didUpdate', this.state.count);
        if (this.state.count === 5) {
            this.setState({ count: 666 });
        }
    }

    componentWillUnmount() {
        console.log('willUnmount');
    }

    render() {
        console.log('CC-render');
        return (
            <>
                <h1 style={this.state.styleObj}>CC</h1>
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
