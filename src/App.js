import React, {Component} from 'react';

class App extends Component {
    state = {
        name: 'Ryu',
        age: 30
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
            </div>
        );
    }
}

export default App;
