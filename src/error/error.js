import React from 'react' 
import './error.css'
import error from '../assets/error.png'

export default function Error () {
    return (
        <div className='error'>
            <h2>No news to fetch!</h2>
            <h4>Try:</h4>
            <ul>
                <li>Checking your internet connection</li>
                <li>Tweaking your filter options</li>
            </ul>
            <div className='error__png'>
                <img src={error}/>
            </div>
        </div>
    )
}