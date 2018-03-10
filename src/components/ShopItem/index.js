import React from 'react';

class ShopItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Name: {this.props.name}, CPS: {this.props.cps}, Cost: {this.props.cost}
            </div>
        );
    }
}

export default ShopItem;