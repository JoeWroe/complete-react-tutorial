import React, {Component} from 'react';

class App extends Component {
    state = {
        name: 'Ryu',
        age: 30
    }

    render() {
        return (
            <div className="app-content">
                <h1>Hello, World!</h1>
                <p>My name is: { this.state.name }</p>
                <p>I am: { this.state.age }</p>
            </div>
        );
    }
}

export default App;
