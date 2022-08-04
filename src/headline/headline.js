import './headline.css'
import { Link } from 'react-router-dom'

export default function Headline(props) {
    const headliner = props.news[0]
    const headlinertwo = props.news[1]
    const headlinerthree = props.news[2]
    return(
        <div className='headlines'>
            <Link to={{pathname: headliner.url}} style={{textDecoration:'none'}} target='_blank' rel='noreferrer'>
                <div className='main__headline' style={{backgroundImage:`url(${headliner.urlToImage})`}}>
                    <div className='headline__overlay'><h2 className='headline__text'>{headliner.title}</h2></div>   
                </div>
            </Link>
            <div className='sub-headlines'>
            {props.news.length > 1 && 
            <Link to={{pathname: headlinertwo.url}} style={{textDecoration:'none'}} target='_blank' rel='noreferrer'>
            <div style={{backgroundImage:`url(${headlinertwo.urlToImage})`}} className='headline__two'>
                <div className='headline__overlay'><h3>{headlinertwo.title}</h3></div>   
            </div>
            </Link>
    
            }
            {props.news.length >2 &&
            <Link to={{pathname: headlinerthree.url}} style={{textDecoration:'none'}} target='_blank' rel='noreferrer'>
            <div style={{backgroundImage:`url(${headlinerthree.urlToImage})`}} className='headline__three'>
                <div className='headline__overlay'><h3>{headlinerthree.title}</h3></div>   
            </div>
            </Link>

            }
            </div>
        </div>

    )
}