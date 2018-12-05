import React from 'react'

const Ninja = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age >= 20 ? (
            <div className='ninja' key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete {ninja.name}</button>
                <br/>
                <br/>
            </div>
        ) : (
            <div className='redacted' key={ninja.id}>
                <div>**PARENTAL SUPERVISION REQUIRED FOR NINJA { ninja.name.toUpperCase() }**</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete {ninja.name}</button>
                <br/>
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