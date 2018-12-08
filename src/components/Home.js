import React, {Component} from 'react'

class Home extends Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setName(this.state.name)
        console.log('Hello, ', this.state.name.toUpperCase(), '!')
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className='center'>Hello, World!</h1>
                <p>My name is: {this.props.name}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Set name.</label>
                    <input type="text" onChange={this.handleChange} value={this.state.name}/>
                </form>
                <p>I am: {this.props.age}</p>
                <span onMouseOver={() => {
                    this.props.setAge()
                }}>Set age by magic...</span>
            </div>
        )
    }
}

export default Home