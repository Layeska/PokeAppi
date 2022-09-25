import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res.data))
    }, [id])

    return (
        <div className='details'>
            <p>Pokemon Details</p>
            <p>Name: <strong>{pokemon.name}</strong></p>
            <img src={pokemon.sprites?.other.dream_world.front_default}/>
            <p><strong>height:</strong> {pokemon.height}</p>
        </div>
    )
}


export default PokemonDetails