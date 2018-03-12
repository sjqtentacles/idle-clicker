import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Clicks: {this.props.count.toFixed(0)}</p>
                <p>CPS: {this.props.cps}</p>
            </div>
        );
    }
}