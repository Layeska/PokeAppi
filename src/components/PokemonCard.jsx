import axios from 'axios'
import React from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    const ref = useRef(null)

    const color = {
        normal: '#b7b7a4',
        fighting: '#1d3557',
        grass: '#52796f',
        fire: '#9e2a2b',
        flying: '#6b705c',
        poison: '#ffc6ff',
        ground: '#f48c06',
        Rock: '#006d77',
        Bug: '#7f5539',
        ghost: '#64dfdf',
        steel: '#9d8189',
        water: '#00bbf9',
        electric: '#fee440',
        psychic: '#7b2cbf',
        ice: '#abc4ff',
        dragon: '#ffb700',
        dark: '#ff758f',
        fairy: '#38b000',
        unknown: '#6fffe9'
    }

    useEffect(() => { axios.get(url).then(res => setPokemon(res.data)) }, [])
    
    const change = () => {
        const imagePokemon = ref.current;

        const color1 = color[pokemon.types?.[0]?.type.name]
        const color2 = color[pokemon.types?.[1]?.type.name]

        imagePokemon.style.background = color1
        imagePokemon.style.border = `solid 6px ${color2 ? color2 : '#73767a'}`
    }


    useEffect(() => { change() }, [pokemon])

    return (
        <div className='containerPokemon'>
            <div ref={ref} className='pokemonCard'> 
                <div className='before'></div>
                <div className='pokemonCardItem' onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                <div className="ribbon"><p className='before2'>N# {pokemon.id}</p></div>
                    <div className='imgBox'>
                        <img src={pokemon.sprites?.other.dream_world.front_default} alt="image of pokemon" />
                    </div>
                    <div className='infoBox'>
                        <h2>{pokemon.name}</h2>
                        <div className='size'>
                            <div className='size-col'>
                                <span> <strong>HP </strong>  {pokemon.stats?.[0].base_stat}</span>
                                <span> <strong>Speed </strong> {pokemon.stats?.[1].base_stat}</span>
                            </div>
                            <div className='size-col'>
                                <span> <strong>Defense </strong> {pokemon.stats?.[2].base_stat}</span>
                                <span> <strong>Attack </strong> {pokemon.stats?.[3].base_stat}</span>
                            </div>
                        </div>
                        <div className="color">
                            <span>{pokemon.types?.[0]?.type.name} | </span>
                            <span>{pokemon.types?.[1]?.type.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default PokemonCard
