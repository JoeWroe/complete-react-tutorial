import React, {Component} from 'react';

import AddNinja from "./AddNinja"
import Ninja from "./Ninja";

class App extends Component {
    state = {
        ninjas: [
            { name: 'Ryu', age: 30, belt: 'black', id: 1 },
            { name: 'Yoshi', age: 25, belt: 'green', id: 2 },
            { name: 'Crystal', age: 19, belt: 'yellow', id: 3 }
        ]
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

    handleClick = (event) => {
        console.log(event.target)
    }

    handleMouseOver = (event) => {
        this.setState({
            age: Math.random() * 100
        })
        console.log(this.state)
    }

    handleCopy = (event) => {
        console.log(event.target)
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('Hello, ', this.state.name.toUpperCase(), '!')
    }

    render() {
        return (
            <div className="app-content">
                <h1>Hello, World!</h1>
                <p>My name is: { this.state.name }</p>
                <p>I am: { this.state.age }</p>
                <button onClick={this.handleClick}>Click Me!</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me!</button>
                <p onCopy={this.handleCopy}>Copy Me!</p>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <br/>
                <AddNinja addNinja={ this.addNinja }/>
                <br/>
                <Ninja ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
            </div>
        );
    }
}

export default App;
