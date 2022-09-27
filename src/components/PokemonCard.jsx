import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url).then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon)

    return (
        <div className='pokemonCard'>
            <div className='pokemonCardItem' onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />*
                <br />
            </div>
        </div>
        
    )   
}

export default PokemonCard


/*
<img src={pokemon.sprites?.front_default} alt="" />
                <img src={pokemon.sprites?.back_default} alt="" />

*/