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

    const searchPokemonEvolution = () => {
        alert('search')
        
    }

    return (
        <div className="details">
            <main>
                <section className="glass">
                    <div className="dashboard">
                        <div className="pokemon">
                            <img className='imagePokemon' src={pokemon.sprites?.other.dream_world.front_default} alt="image of pokemon" />
                            <h3>Pokemon Details</h3>
                            <p><strong>{pokemon.name}</strong></p>
                            
                            <p>"{characteristic.descriptions?.[7].description}"</p>
                        </div>
                        <div className='links'>
                            <div className='link'>
                                <h2>Height: <span>{pokemon.height} mts</span></h2>
                                <h2>Weight: <span>{pokemon.weight} Kg</span></h2>
                            </div>
                            <div className='link'>
                                <h2>Types</h2>
                                <p>{pokemon.types?.[0]?.type.name}</p>
                                <p>{pokemon.types?.[1]?.type.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="games">
                        <div className="status">
                            <h1>Pokemon Details</h1>
                            {/*<input type="text" />*/}
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="card-inf">
                                    <div className='div-moves'>
                                        <div className="ranges">
                                            <br />
                                            <br />
                                            {
                                                pokemon.stats?.map(poke => (
                                                    <div className="s" key={poke.id}>
                                                        <h3>{poke.stat.name}</h3>
                                                        <input type="range"  value={poke.base_stat} />
                                                        <p>{poke.base_stat}%</p>
                                                    </div>
                                                ))
                                            }
                                            {/*<input type="range"  value={pokemon.stats[0].base_stat} />
                                            <p>{pokemon.stats[0].base_stat}%</p>*/}
                                        </div>
                                        <div>
                                            {/*<input type="range"  value={pokemon.stats[0].base_stat} />
                                            <p>{pokemon.stats[0].base_stat}%</p>*/}
                                        </div>

                                    {/*
                                        pokemon.moves?.map(poke => (
                                            <PokemonMoves key={poke.id} move={poke.move.name}/>
                                        ))
                                        //<p>{pokemon.moves?.[0].move.name}</p>
                                        */}
                                    </div>
                                
                                    {/*<button onClick={searchPokemonEvolution}>{evolution.chain?.evolves_to?.[0]?.species.name}</button>
                                    <button onClick={searchPokemonEvolution}>{evolution.chain?.evolves_to?.[0]?.evolves_to[0]?.species.name}</button>*/}
                                    {/*<h2>{evolution.chain?.evolves_to?.[0]?.species.name}</h2>
                                    <img src={pokemon.sprites?.other.dream_world.front_default}/>*/}
                                </div>
                                
                            </div>
                            <div className="card">
                                <div className="card-info">
                                    <div className='card-images'>
                                        {/*<h2>{searchPokemonEvolution}{evolution.chain?.evolves_to?.[0]?.species.name}</h2>
                                        <img src={detailPokemon.sprites?.other.dream_world.front_default}/>*/}
                                    </div>
                                    <div className='card-images'>
                                        <h2>Images of {pokemon.name}</h2>
                                        {/*<h2>{evolution.chain?.evolves_to?.[0].evolves_to[0]?.species.name}</h2>*/}
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
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    );
};

export default PokemonDetails;
