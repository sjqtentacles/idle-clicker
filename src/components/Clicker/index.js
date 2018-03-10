import React from 'react';
import './index.css';

export default class Clicker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className="clickButton" onClick={this.props.action}>
                    Click Me
                </button>
            </div>
        );
    }
}