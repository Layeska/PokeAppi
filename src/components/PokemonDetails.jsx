import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userApi from "../hook/useApi";

import '../styles/PokemonItem.css'
import PokemonMoves from "../styles/PokemonMoves";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [characteristic, setCharacteristic] = useState({})
    const [evolution, setEvolution] = useState({})
    const [detailPokemon, SetDetailPokemon] = useState({})
    const namePokemon = pokemon.name

    /*const { changeUrl: changeDataPokemon } = userApi(`https://pokeapi.co/api/v2/pokemon/${id}`,(res) => setPokemon(res.data))
    const { changeUrl: changeCharacterData } = userApi(`https://pokeapi.co/api/v2/characteristic/${id}/`, (res) => setCharacteristic(res.data))*/

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res.data))
        
        axios.get(`https://pokeapi.co/api/v2/characteristic/${id}/`).then((res) => setCharacteristic(res.data))
        axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`).then((res) => setEvolution(res.data))
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => SetDetailPokemon(res.data))
    }, [id])


    console.log(pokemon)
    console.log(characteristic)
    console.log(evolution)
    console.log(detailPokemon)


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

    const color1 = color[pokemon.types?.[0]?.type.name]
    const color2 = color[pokemon.types?.[1]?.type.name]


    const searchPokemonEvolution = () => {
        alert('search')
        
    }

    const changeVolumeMt_kg = (info) => { return info / 10 }

    const changeVolumeCm = (info) => { return info * 100 }


    const changeVolumeLb = (info) => { return info * 2.205 }
    return (
        <div className='details'>
            <main style={{background: `linear-gradient(to right top, ${color1}, ${color2 ? color2 : '#73767a'})`}}>
                <section className='glass'>
                    <div className='dashboard'>
                        <div className='pokemon'>
                            <img className='imagePokemon' src={pokemon.sprites?.other.dream_world.front_default} alt="image of pokemon" />
                            <h3>Pokemon Details</h3>
                            <p style={{ color: '#0e2180'}}><strong>{pokemon.name}</strong></p>
                            <p style={{ color: '#0e2180'}}><i>"{characteristic.descriptions?.[7].description}"</i></p>
                        </div>
                        <div className='links'>
                            <div className='link'>
                                <h2> <strong>Height</strong> <span> {changeVolumeMt_kg(pokemon.height)} mts {changeVolumeCm(pokemon.height)} Cm</span></h2>
                                <h2> <strong>Weight </strong> <span>{changeVolumeMt_kg(pokemon.weight)} Kg {changeVolumeCm(pokemon.height)} Lb</span></h2>
                            </div>
                            <div className='link2'>
                                <h2><b>Types</b></h2>
                                <p style={{ color: '#0e2180'}}>{pokemon.types?.[0]?.type.name}</p>
                                <p style={{ color: '#0e2180'}}>{pokemon.types?.[1]?.type.name}</p>
                            </div>
                            <div className='link3'>
                                <h2 className='title-link'> <b>Abilities</b></h2>
                                <p style={{ color: '#0e2180'}}>{pokemon.abilities?.[0]?.ability.name}</p>
                                <p style={{ color: '#0e2180'}}>{pokemon.types?.[1]?.type.name}</p>
                                <p style={{ color: '#0e2180'}}>{pokemon.types?.[2]?.type.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='games'>
                        <div className='status'>
                            <h1>{pokemon.name}</h1>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <div className='card-inf'>
                                    <div className='div-moves'>
                                        <h2 style={{fontWeight: '600'}}>Stats</h2>
                                        {
                                            pokemon.stats?.map(poke => (
                                                <div className='items' key={poke.id}>
                                                    <div className='itemTitle'>
                                                        <label>{poke.stat.name}</label>
                                                    </div>
                                                    <progress id="file" max="100" value={poke.base_stat}> {poke.base_stat}% </progress>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-info'>
                                    <div className='card-images card2'>
                                        <h2 style={{fontWeight: '600'}}>Images of {pokemon.name}</h2>
                                        <img src={detailPokemon.sprites?.back_default}/>
                                        <img src={detailPokemon.sprites?.front_shiny}/>
                                        <img src={detailPokemon.sprites?.other.home.front_default}/>
                                        <img src={detailPokemon.sprites?.other.home.front_shiny}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
    )
}

export default PokemonDetails
/*
{
                                            pokemon.stats?.map(poke => (
                                                <div className='items' key={poke.id}>
                                                    <div className='itemTitle'>
                                                        <h3>{poke.stat.name}</h3>
                                                    </div>
                                                    <p>{poke.stat.name}</p>
                                                    <div class="container">
                                                        <div class="skill html">{poke.base_stat}</div>
                                                    </div>
                                                    <input type='range'  value={poke.base_stat} />
                                                    <p>{poke.base_stat}%</p>
                                                </div>
                                            ))
                                        }

*/