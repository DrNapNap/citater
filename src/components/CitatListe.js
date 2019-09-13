import React from 'react'

const CitatListe = (props) => {
    const alleCitater = props.heyyyyProp.map(c =>{

        return (
            <div key={c.id}>
                        <h2>{c.titel}</h2>
                        <p>{c.citattxt}</p>
                        
                        <p><i>{c.forfatter}</i></p>
                        <button className="btn btn-outline-success" onClick={() =>{props.SletCitat(c.id)} }>SLET</button>
                            <hr className="btn-secondary"/>

                        </div>
        )
    })
    return (
        <div>
            { alleCitater }
        </div>
    )
}

export default CitatListe
