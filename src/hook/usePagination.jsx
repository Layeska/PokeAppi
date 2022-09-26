import React from 'react'
import { useState } from 'react'

const usePagination = (pokemonList) => {
    const [pages, setPages] = useState(1)
    const pokemonPerPage = 2

    const lastPokemonIndex = pages * pokemonPerPage
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage

    const pokemonPaginated = pokemonList.slice(firstPokemonIndex, lastPokemonIndex)
    const totalPages = Math.ceil(pokemonList.length / pokemonPerPage)

    const limit = pokemonPerPage / pokemonPaginated
    const visiblePage = 5

    const pagesNumber = []

    for(let i=1; i<=totalPages; i++) {
        pagesNumber.push(i)
    }

    return {pages, setPages, totalPages, pagesNumber, pokemonPaginated}
}

export default usePagination