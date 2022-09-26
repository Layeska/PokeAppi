import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import PokemonCard from './PokemonCard'
import TopBar from './styles/TopBar'
import usePagination from '../hook/usePagination'
import useApi from '../hook/useApi'


const PokemonList = () => {
    const name = useSelector(state => state.userName)

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonType, setPokemonType] = useState([])
    const [nameInput, setNameInput] = useState('')
    const navigate = useNavigate()

    const {ChangeUrl} = useApi('https://pokeapi.co/api/v2/pokemon/', res => setPokemonList(res.data.results))
    const {ChangeUrl: changeData} = useApi('https://pokeapi.co/api/v2/type/', res => setPokemonType(res.data.results))


    /*useEffect(() => {
        
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => setPokemonList(res.data.results))
        axios.get('https://pokeapi.co/api/v2/type/').then(res => setPokemonType(res.data.results))
    }, [])*/

    //console.log(pokemonType)

    const searchName = () => navigate(`/pokemon/${nameInput}`)

    const searchTypePokemon = (typeList) => axios.get(typeList).then(res => setPokemonList(res.data.pokemon))
    
    const {pages, setPages, totalPages, pagesNumber, pokemonPaginated } = usePagination(pokemonList)
    
    return (
        <div>
            {ChangeUrl}
            {changeData}

            <h1>Pokemon</h1>
            <TopBar/>
            <h3>Welcome User {name}</h3>
            <button onClick={() => setPages(pages - 1)} disabled={pages === 1}><i className="fa-sharp fa-solid fa-caret-left"></i></button>
            {
                pagesNumber.map((number) => (
                    <button className='btnIndex' onClick={() => setPages(number)}>{number}</button>
                ))
            }
            <button onClick={() => setPages(pages + 1)} disabled={pages === totalPages}><i className="fa-solid fa-caret-right"></i></button>
            <br />

            <div>
                <input type="text" placeholder='Search by name' value={nameInput} onChange={e => setNameInput(e.target.value)}/>
                <button onClick={searchName}>Search Pokemon</button>
            </div>
            

            <div>
                <select onChange={e => searchTypePokemon(e.target.value)}>
                    <option>Select type pokemon</option>
                    {
                        pokemonType.map(pokemon => (
                            <option value={pokemon.url} key={pokemon.url}>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</option>
                        ))
                    }
                </select>
            </div>

            <div className='pokemon-container'>
                {
                    pokemonPaginated.map(poke => (
                        <PokemonCard url={poke.url ? poke.url : poke.pokemon.url} key={poke.id ? poke.id : poke.pokemon?.id}/>
                    ))
                }
            </div>
        </div>
    )
}


export default PokemonList