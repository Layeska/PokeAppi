import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userApi from "../hook/useApi";

import '../styles/PokemonItem.css'

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
        alert('buscando')
        const {ChangeUrl} = userApi(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`, res => setPokemon(res.data.results))
    }

    return (
        <div className="details">
            <main>
                <section className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img className='imagePokemon' src={pokemon.sprites?.other.dream_world.front_default} alt="image of pokemon" />
                            <h3>Pokemon Details</h3>
                            <p><strong>{pokemon.name}</strong></p>
                            {characteristic.descriptions?.[7].description}
                        </div>
                        <div className='links'>
                            <h2>fsfh</h2>
                            <p>{}</p>
                        </div>
                    </div>
                    <div className="games">
                        <div className="status">
                            <h1>Evolutions</h1>
                            <input type="text" />
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="card-info">
                                    <button onClick={searchPokemonEvolution}>{evolution.chain?.evolves_to?.[0]?.species.name}</button>
                                    {/*<h2>{evolution.chain?.evolves_to?.[0]?.species.name}</h2>
                                    <img src={pokemon.sprites?.other.dream_world.front_default}/>*/}
                                </div>
                                
                            </div>
                            <div className="card">
                                <div className="card-info">
                                    <h2>{evolution.chain?.evolves_to?.[0].evolves_to[0]?.species.name}</h2>
                                    <img src={detailPokemon.sprites?.other.dream_world.front_default}/>
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
