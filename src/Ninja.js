import React from 'react'

const Ninja = ({ninjas}) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age >= 20 ? (
            <div className='ninja' key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <br/>
            </div>
        ) : (
            <div className='redacted'>
                <div>**PARENTAL SUPERVISION REQUIRED**</div>
                <br/>
            </div>
        )
    })

    return (
        <div className="ninjaList">
            {ninjaList}
        </div>
    )
}

export default Ninja