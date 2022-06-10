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
                    "cps": 10,
                    "cost": 50
                },
                {
                    "name": "Click Manager",
                    "cps": 25,
                    "cost": 750
                }
                {
                    "name": "Click Labor",
                    "cps": 50,
                    "cost": 1000
                }
                {
                    "name": "Clicker Angel",
                    "cps": 75,
                    "cost": 1500
                }
                {
                    "name": "Clicker God",
                    "cps": 750,
                    "cost": 150000
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
