import React from 'react'
import { useSelector } from 'react-redux'

const TopBar = () => {
    const name = useSelector(state => state.userName)
    
    return (
        <div className='principalBar'>
            <div className='TopBar'>
                <img src="https://i.postimg.cc/xTfd9zwn/logo-pokedex-6f1fd44625c52ccd693ca4e39b23cc9f.png" alt="" />
            </div>
            <div className='container'>
                <div className='message'>
                    <p>Welcome Trainer <span>{name}</span></p>
                </div>
            </div>
        </div>
    )
}


export default TopBar