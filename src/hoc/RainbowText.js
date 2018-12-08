import React from 'react'

const RainbowText = (ComponentToWrap) => {

    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'deep-purple']
    const randomColour = colours[Math.floor(Math.random() * 6)]
    const className = randomColour + '-text'

    return (props) => {
        return (
            <div className={className}>
                <ComponentToWrap {...props} />
            </div>
        )
    }
}

export default RainbowText