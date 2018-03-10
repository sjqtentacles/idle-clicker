import React from 'react';
import './index.css';
import ShopItem from '../ShopItem';

export default class Shop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    "name": "Click Factory",
                    "cps": 50,
                    "cost": 30
                }
            ]
        };
    }

    render() {

        const listItems = this.state.items.map((item) =>
            <li onClick={() => this.props.buy(item)} >
                <ShopItem name={item.name} cps={item.cps} cost={item.cost} />
            </li>
        );

        return (
            <div className="shop">
                Shop
                <ul>{listItems}</ul>
            </div>
        );
    }
}