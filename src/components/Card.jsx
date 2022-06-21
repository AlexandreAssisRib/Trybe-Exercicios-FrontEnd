 import React  from 'react'
 import './Card.css'

class Card extends React.Component {
    render () {
        
        const xab = this.props.pokemons;
        console.log(xab)

        return (
            xab.map(poke => {
                return <div className='card'>
                <p>{poke.name}</p>
                <p>{poke.type}</p>
                <p> Average Weight: {poke.averageWeight.value} {poke.averageWeight.measurementUnit}</p>
                <img src={poke.image} alt="" />
            </div>
            })
            
        )
    }
}

export default Card;