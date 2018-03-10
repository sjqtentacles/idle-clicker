import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Clicks: {this.props.count.toFixed(0)}
            </div>
        );
    }
}