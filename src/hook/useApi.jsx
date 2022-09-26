import axios from 'axios'
import { useState, useEffect } from 'react'

const userApi = (url, accessData) => {
    const [value, setValue] = useState([])

    useEffect(() => { changeUrl() }, [])

    const changeUrl = () => axios.get(url).then(res => setValue(accessData(res)))

    return {changeUrl}
}

export default userApi