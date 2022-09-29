import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'

import Pagination from '../styles/Pagination'
import TopBar from '../styles/TopBar'

import PokemonCard from './PokemonCard'
import useApi from '../hook/useApi'

const PokemonList = () => {
    const name = useSelector(state => state.userName)

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonType, setPokemonType] = useState([])
    const [nameInput, setNameInput] = useState('')

    const navigate = useNavigate()

    const {ChangeUrl} = useApi('https://pokeapi.co/api/v2/pokemon/', res => setPokemonList(res.data.results))
    const {ChangeUrl: changeData} = useApi('https://pokeapi.co/api/v2/type/', res => setPokemonType(res.data.results))

    console.log(pokemonType)

    const searchName = () => navigate(`/pokemon/${nameInput}`)

    const searchTypePokemon = (typeList) => axios.get(typeList).then(res => setPokemonList(res.data.pokemon))
    
    const handleKeyDown = e => {
        if(e.key === 'Enter') {
            searchName()
            e.preventDefault()
        }
    }

    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(3)

    const max = pokemonList.length / perPage

    //pokemonList.slice((page-1) * perPage, (page - 1) * perPage + perPage)
    const lastPokemonIndex = (page-1) * perPage
    const firstPokemonIndex = (page - 1) * perPage + perPage

    const pokemonPaginated = pokemonList.slice(lastPokemonIndex, firstPokemonIndex)

    return (
        <>
            {ChangeUrl}
            {changeData}
            <TopBar/>
            
            <div className='searchPokemon'>
                <label className='labelSearch' htmlFor="">
                    <input onKeyDown={handleKeyDown}  id={'name'} type="text" value={nameInput} onChange={e => setNameInput(e.target.value)}/>
                    <span className='label'>Search Pokemon</span>
                    <span className='focus-bg'></span>
                </label>
                
                <div className='bar'></div>
                {/*<button className='btnSearch' onClick={searchName} >Search Pokemon</button>*/}
            
                <div>
                    <select onChange={e => searchTypePokemon(e.target.value)}>
                        <option key={pokemonType.url}>All type pokemon</option>
                        {
                            pokemonType.map(pokemon => (
                                <option value={pokemon.url} key={pokemon.url}>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            
            <div className='pokemonContainer'> 
                { pokemonList.slice((page-1) * perPage, (page - 1) * perPage + perPage).map(poke => (
                    <PokemonCard url={poke.url ? poke.url : poke.pokemon.url} key={poke.url ? poke.url : poke.pokemon.url}/>
                )) }
            </div>
            <br />

            <div className='pagination'>
                <div className='paginationItem'>
                    <Pagination page={page} setPage={setPage} max={max}/>
                </div>
            </div>
            <br />
        </>
    )
}


export default PokemonList