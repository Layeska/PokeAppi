import axios from 'axios'
import { useState, useEffect } from 'react'

const userApi = () => {
    const [value, setValue] = useState({})

    useEffect(() => changeUrl(), [])

    const changeUrl = () => axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => setValue(res.data))

    return {value, changeUrl}
}

export default userApi