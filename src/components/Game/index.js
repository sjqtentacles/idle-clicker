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
            updateSpeed: 0.2, // update every .2 seconds,
            items: [
                {
                    "name": "InitClick",
                    "cps": 1,
                    "cost": 0
                }
            ],
            cps: 0
        };
        this.click = this.click.bind(this);
        this.tick = this.tick.bind(this);
        this.get_cps = this.get_cps.bind(this);
        this.buy = this.buy.bind(this);

        this.state.cps = this.get_cps();
    }

    componentDidMount() {
        setInterval(this.tick, (1000* this.state.updateSpeed));
    }

    componentWillMount() {
        clearInterval(this.tick);
    }

    get_cps() {
        let additive = this.state.items.reduce((a, b) => (a.cps || 0) + (b.cps || 0), 0);
        return additive;
    }

    tick() {
        let currentCount = this.state.count;
        this.setState({count: (currentCount + (this.state.updateSpeed * this.state.cps))});
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
        let newItems = currentItems.concat(item);
        let currentCPS = this.state.cps;

        if (currentCount < item.cost){
            return;
        }

        this.setState({
            count: currentCount - item.cost,
            items: newItems,
            cps: (currentCPS + item.cps)
        });
    }

    render() {
        return (
            <div>
                <Counter count={this.state.count} cps={this.state.cps}/>
                <Clicker action={this.click}/>
                <Inventory items={this.state.items} />
                <Shop buy={this.buy} />
            </div>
        );
    }
}

export default Game;