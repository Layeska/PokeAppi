import axios from 'axios'
import React from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    const ref = useRef(null)

    const color = {
        normal: '#f4a261',
        fighting: '#a8dadc',
        grass: '#1C382E',
        fire: '#4C3B1A',
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

    useEffect(() => {
        axios.get(url).then(res => setPokemon(res.data))
    }, [])

    useEffect(() => {
        change()
    }, [pokemon])

    const change = () => {
        const imagePokemon = ref.current;
       // console.log(imagePokemon)

        const color1 = color[pokemon.types?.[0]?.type.name]
        const color2 = color[pokemon.types?.[1]?.type.name]
        
       // console.log(color2)

        imagePokemon.style.background = color1
        imagePokemon.style.border = `solid 6px ${color2 ? color2 : '#73767a'}`
    }

    console.log(pokemon)
    {/*style={{background: colors[bgColor]}}*/}

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
                        {/*<h3>Stats:</h3>*/}
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


/*
<a href="#">Show Pokemon</a>

<span>{pokemon.types?.[0].type.name}</span>


<img src={pokemon.sprites?.front_default} alt="" />
                <img src={pokemon.sprites?.back_default} alt="" />
<h1>{pokemon.name}</h1>
*/


