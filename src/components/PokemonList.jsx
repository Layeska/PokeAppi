import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useNavigate } from 'react-router-dom'

const PokemonList = () => {
    const name = useSelector(state => state.userName)

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonType, setPokemonType] = useState([])
    const [nameInput, setNameInput] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => setPokemonList(res.data.results))

    }, [])

    console.log(pokemonList)

    const searchName = () => navigate(`/pokemon/${nameInput}`)

   

    return (
        <div>
            <h1>Pokemon</h1>
            <h3>Welcome User {name}</h3>
            <button>Before</button>
            <button>Next</button>

            <div>
                <input type="text" placeholder='Search by name' value={nameInput} onChange={e => setNameInput(e.target.value)}/>
                <button onClick={searchName}>Search Pokemon</button>
            </div>

            <div>
                <select onChange={e => setPokemonType(e.target.value)}>
                    <option>Select type pokemon</option>
                    {
                        pokemonType.map(pokemon => (
                            <option value={pokemon.url} key={pokemon.url}>{pokemon.types[0].type.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className='pokemon-container'>
                {
                    pokemonList.map(pokemonItem => (
                        <PokemonCard url={pokemonItem.url} key={pokemonItem.url}/>
                    ))
                }
            </div>
        </div>
    )
}


export default PokemonList