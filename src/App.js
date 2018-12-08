import React, {Component} from 'react';

import Home from './components/Home'
import Navbar from './components/Navbar'

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
        this.setState({ name })
    }

    handleSetAgeWithMouseOver = () => {
        this.setState({
            age: Math.random() * 100
        })
    }

    // addNinja = (ninja) => {
    //     ninja.id = Math.random()
    //     let ninjas = [...this.state.ninjas, ninja]
    //     this.setState({
    //         ninjas: ninjas
    //     })
    // }
    //
    // deleteNinja = (id) => {
    //     let ninjas = this.state.ninjas.filter(ninja => {
    //         return ninja.id !== id
    //     })
    //     this.setState({
    //         ninjas: ninjas
    //     })
    // }

    render() {
        return (
            <div className="app-content">
                <Navbar/>
                <Home
                    name={this.state.name}
                    age={this.state.age}
                    setName={this.setName}
                    setAge={this.handleSetAgeWithMouseOver}
                />
            </div>
        );
    }
}

export default App;
