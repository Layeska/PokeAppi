import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const useColorBg = () => {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => { axios.get(url).then(res => setPokemon(res.data)) }, [])
    
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

       // const imagePokemon = ref.current;

        const color1 = color[pokemon.types?.[0]?.type.name]
        const color2 = color[pokemon.types?.[1]?.type.name]

       /* imagePokemon.style.background = color1
        imagePokemon.style.border = `solid 6px ${color2 ? color2 : '#73767a'}`*/
    

    return {color1, color2}
}
    
export default useColorBg