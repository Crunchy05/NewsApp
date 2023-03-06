import React from 'react'
import load from './Hourglass.gif'

export default function Spinner (props) {
    
        return (
            <div className='text-center'>
                <img src={load} alt="loading" />
            </div>
        )
    
}
