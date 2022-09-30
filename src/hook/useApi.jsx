import axios from 'axios'
import { useState, useEffect } from 'react'
import { setIsLoading } from '../slices/isLoadingSpinner.slice'

const userApi = (url, accessData) => {
    const [value, setValue] = useState([])

     //TODO: pag loading
     const [isLoading, setIsLoading ] = useState(true)

    useEffect(() => { changeUrl() }, [])

    const changeUrl = () => axios.get(url).then(res => setValue(accessData(res)))

    return {changeUrl}
}

export default userApi