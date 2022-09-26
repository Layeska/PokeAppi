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
                    <p>Welcome Trainer <span style={{color: '#363299'}}>{name}</span> !</p>
                </div>
                <div className='ball'>
                    <img className='pokeBall' src="https://i.postimg.cc/x8h2wbYK/images-removebg-preview.png" alt="" />
                    <p className='cant'>10</p>
                </div>
                
            </div>
        </div>
    )
}


export default TopBar