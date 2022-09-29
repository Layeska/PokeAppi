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

    /*const { changeUrl: changeDataPokemon } = userApi(`https://pokeapi.co/api/v2/pokemon/${id}`,(res) => setPokemon(res.data))
    const { changeUrl: changeCharacterData } = userApi(`https://pokeapi.co/api/v2/characteristic/${id}/`, (res) => setCharacteristic(res.data))*/

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res.data))
        
        axios.get(`https://pokeapi.co/api/v2/characteristic/${id}/`).then((res) => setCharacteristic(res.data))
        axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`).then((res) => setEvolution(res.data))
    }, [id])

    console.log(pokemon)
    console.log(characteristic)
    console.log(evolution)

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

                        </div>
                        {/*<div className="links">
                            <div className="link">
                                <img src="../assets/steam.png" alt="" />
                                <h2>Games</h2>
                            </div>
                            <div className="link">
                                <img src="../assets/upcoming.png" alt="" />
                                <h2>New</h2>
                            </div>
                            <div className="link">
                                <img src="../assets/library.png" alt="" />
                                <h2>Library</h2>
                            </div>
                        </div>
                        <div className="pro">
                            <h2>Join pro for free games.</h2>
                            <img src="../assets/controller.png" alt="" />
                        </div>*/}
                    </div>
                    <div className="games">
                        <div className="status">
                            <h1>Evolutions</h1>
                            <input type="text" />
                        </div>
                        <div className="cards">
                            <div className="card">
                                
                                <div className="card-info">
                                    <h2>{evolution.chain?.evolves_to?.[0]?.species.name}</h2>
                                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                                </div>
                                <h2 className="percentage">60%</h2>
                            </div>
                            <div className="card">
                                <h2>{evolution.chain?.evolves_to?.[0].evolves_to[0]?.species.name}</h2>
                            </div>
                            <div className="card">
                                <img src="../assets/spiderman.png" alt="" />
                                <div className="card-info">
                                    <h2>Spiderman Miles Morales</h2>
                                    <p>PS5 Version</p>
                                    <div className="progress"></div>
                                </div>
                                <h2 className="percentage">60%</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="circle1"></div>
            <div className="circle2"></div>

            {/*<br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Pokemon Details</p>
            <p> Name: <strong>{pokemon.name}</strong></p>
            <img src={pokemon.sprites?.other.dream_world.front_default} />
                    <p><strong>height:</strong> {pokemon.height}</p>*/}
        </div>
    );
};

export default PokemonDetails;
