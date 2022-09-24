import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
    const name = useSelector(state => state.userName)
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => setPokemonList(res.data.results))
    }, [])

    console.log(pokemonList)

    return (
        <div>
            <h1>Pokemon</h1>
            <h3>Welcome User {name}</h3>
            {
                pokemonList.map(pokemonItem => (
                    <PokemonCard url={pokemonItem.url} key={pokemonItem.url}/>
                ))
            }
        </div>
    )
}


export default PokemonList