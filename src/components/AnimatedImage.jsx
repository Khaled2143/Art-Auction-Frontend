import React from 'react'
import animate from '../assets/CodeBrigade.gif'

function AnimatedImage() {
    return (
        <div>
            <div className='Animation'>
                <img className='AnimatedImage' src={animate}></img>
            </div>
        </div>
    )
}

export default AnimatedImage