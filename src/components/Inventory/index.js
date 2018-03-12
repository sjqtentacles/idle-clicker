import React from 'react';
import ShopItem from '../ShopItem';
import './index.css';

export default class Inventory extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.items;
        const listNames = listItems.map((i) => i.name);

        let counts = {};
        for (var i = 0; i < listNames.length; i++) {
            counts[listNames[i]] = 1 + (counts[listNames[i]] || 0);
        }

        let uniqItems = Array.from(
            new Set(
                listItems.map((item) => 
                    JSON.stringify(item)))).map((item) => 
                        JSON.parse(item));

        const listItemsJSX = uniqItems.map((item) =>
            <li>
                {counts[item.name]}x: <ShopItem name={item.name} cps={item.cps} cost={item.cost} />
            </li>
        );

        return (
            <div className="inventory">
                Inventory
                <ul>{listItemsJSX}</ul>
            </div>
        );
    }
}