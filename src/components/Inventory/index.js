import React from 'react';
import ShopItem from '../ShopItem';
import './index.css';

export default class Inventory extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.items.map((item) =>
            <li>
                <ShopItem name={item.name} cps={item.cps} cost={item.cost} />
            </li>
        );

        return (
            <div className="inventory">
                Inventory
                <ul>{listItems}</ul>
            </div>
        );
    }
}