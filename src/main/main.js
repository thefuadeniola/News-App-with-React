import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

export default function Main (props) {
    const mainNewsItems = props.news
    const newsList = mainNewsItems.map((mainNewsItem) => {
        return (
            <Link to={{pathname: mainNewsItem.url}}  style={{textDecoration:'none'}} target='_blank'>
                <div className='news__box'>
                    <div className='news__box-image' style={{backgroundImage:`url(${mainNewsItem.urlToImage})`, 
                backgroundSize: 'contain', backgroundRepeat:'no-repeat'}}></div>
                    <div className='news__box-text'><h4>{mainNewsItem.title}</h4></div>
                </div>
            </Link>
        )
    })
    return (
        <div className='main'>
            <h3>More Latest News</h3>
            <div className='main__news'>
                {newsList}
            </div>
        </div>
    )
}