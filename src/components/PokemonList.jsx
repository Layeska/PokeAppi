import React, { useRef } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PokemonCard from './PokemonCard'
import TopBar from './styles/TopBar'
import useApi from '../hook/useApi'
import usePagination from '../hook/usePagination'

const PokemonList = () => {
    const name = useSelector(state => state.userName)

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonType, setPokemonType] = useState([])
    const [nameInput, setNameInput] = useState('')

    const navigate = useNavigate()

    const {ChangeUrl} = useApi('https://pokeapi.co/api/v2/pokemon/', res => setPokemonList(res.data.results))
    const {ChangeUrl: changeData} = useApi('https://pokeapi.co/api/v2/type/', res => setPokemonType(res.data.results))

    //console.log(pokemonType)

    const searchName = () => navigate(`/pokemon/${nameInput}`)

    const searchTypePokemon = (typeList) => axios.get(typeList).then(res => setPokemonList(res.data.pokemon))
    
    const {pages, setPages, totalPages, pagesNumber, pokemonPaginated } = usePagination(pokemonList)
    
    const handleKeyDown = e => {
        if(e.key === 'Enter') {
            searchName()
            e.preventDefault()
        }
    }
    
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
                { pokemonPaginated.map(poke => (
                    <PokemonCard url={poke.url ? poke.url : poke.pokemon.url} key={poke.url ? poke.url : poke.pokemon.url}/>
                )) }
            </div>

            <div className='pagination'>
                <div className='paginationItem'>
                    <button className='before' onClick={() => setPages(pages - 1)} disabled={pages === 1}><i className="fa-sharp fa-solid fa-caret-left"></i></button>
                    { pagesNumber.map((number) => (
                        <button key={number} className='btnIndex' onClick={() => setPages(number)}>{number}</button> ))
                        
                    }
                    <button className='next' onClick={() => setPages(pages + 1)} disabled={pages === totalPages}><i className="fa-solid fa-caret-right"></i></button>
                </div>
            </div>
            <br />
        </>
    )
}


export default PokemonList