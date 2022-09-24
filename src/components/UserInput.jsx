import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeUser } from '../slices/userName.slice'

const UserInput = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeUserName = () => {
        dispatch(changeUser(name))
        navigate('/pokemon')
    }

    return (
        <div className='cardInput'>
            <div className='img'></div>
            <div className='cardInfo'>
                <input type="text" placeholder="What's your name?" value={name} onChange={e => setName(e.target.value)}/>
                <button onClick={changeUserName}><i className='fa-solid fa-arrow-right'></i></button>
            </div>
        </div>
    )
}

export default UserInput