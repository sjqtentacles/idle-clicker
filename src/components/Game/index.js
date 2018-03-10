import React from 'react';
import Clicker from '../Clicker';
import Counter from '../Counter';
import Shop from '../Shop';
import Inventory from '../Inventory';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            updateSpeed: .1, // update every .2 seconds,
            items: [
                {
                    "name": "InitClick",
                    "cps": 10,
                    "cost": 0
                }
            ]
        };
        this.click = this.click.bind(this);
        this.tick = this.tick.bind(this);
        this.buy = this.buy.bind(this);
    }

    componentDidMount() {
        setInterval(this.tick, (1000* this.state.updateSpeed));
    }

    componentWillMount() {
        clearInterval(this.tick);
    }

    tick() {
        let currentCount = this.state.count;
        let additive = this.state.items.reduce((a,b) => (a.cps || 0) + (b.cps || 0), 0);
        this.setState({count: (currentCount + (this.state.updateSpeed * additive))});
    }

    click() {
        let currentCount = this.state.count;
        this.setState({
            count: currentCount+1
        });
    }

    buy(item) {
        let currentCount = this.state.count;
        let currentItems = this.state.items;

        if (currentCount < item.cost){
            return;
        }

        this.setState({
            count: currentCount - item.cost,
            items: currentItems.concat(item)
        });
    }

    render() {
        return (
            <div>
                <Counter count={this.state.count} />
                <Clicker action={this.click}/>
                <Inventory items={this.state.items} />
                <Shop buy={this.buy} />
            </div>
        );
    }
}

export default Game;