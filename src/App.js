import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import RainbowText from './hoc/RainbowText'

import Home from './component/Home'
import Navbar from './component/Navbar'
import AddNinja from "./component/AddNinja";
import Ninja from "./component/Ninja";

class App extends Component {
    state = {
        name: '',
        ninjas: [
            {name: 'Ryu', age: 30, belt: 'black', id: 1},
            {name: 'Yoshi', age: 25, belt: 'green', id: 2},
            {name: 'Crystal', age: 19, belt: 'yellow', id: 3}
        ]
    }

    setName = (name) => {
        this.setState({name})
    }

    handleSetAgeWithMouseOver = () => {
        this.setState({
            age: Math.floor(Math.random() * 80)
        })
    }

    addNinja = (ninja) => {
        ninja.id = Math.random()
        let ninjas = [...this.state.ninjas, ninja]
        this.setState({
            ninjas: ninjas
        })
    }

    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
        })
        this.setState({
            ninjas: ninjas
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-content">
                    <Navbar/>
                    <Route exact path='/' render={() => (
                        <Home
                            name={this.state.name}
                            age={this.state.age}
                            setName={this.setName}
                            setAge={this.handleSetAgeWithMouseOver}
                        />
                    )}/>
                    <Route path='/ninjas' render={() => (
                        <Ninja
                            ninjas={this.state.ninjas}
                            deleteNinja={this.deleteNinja}
                        />
                    )}/>
                    <Route path='/add-ninja' render={() => (
                        <AddNinja
                            addNinja={this.addNinja}
                        />
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default RainbowText(App);
