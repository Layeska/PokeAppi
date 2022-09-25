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
        <div className='principal'>
            <div className='cardInput'>
                <div className='img'></div>
                <div className='cardInfo'>
                    <input type="text" placeholder="Hi!, What's your name?" value={name} onChange={e => setName(e.target.value)}/>
                    <button onClick={changeUserName} className='btn'><i className='fa-solid fa-arrow-right'></i></button>
                </div>
            </div>
        </div>
    )
}

export default UserInput