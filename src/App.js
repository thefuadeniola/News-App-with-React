import React from 'react'
import './App.css'
import Header from './header/header'
import { BrowserRouter as Router } from 'react-router-dom'
import Headline from './headline/headline'
import Main from './main/main'
import Error from './error/error'
import { Search } from '@mui/icons-material'
//import countryList from 'react-select-country-list'
//import Select from 'react-select'


export default function App () {
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
      
    const [filterNews, setFilterNews] = React.useState(
        {
            country : 'us',
            category : 'general',
        }
    )

    React.useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${filterNews.country}&category=${filterNews.category}&language=en&pageSize=30&apiKey=faf603b411e8416abd64d285b6f31710`)
        .then(res => res.json())
        .then(data => setAllNews(data.articles))
    }, [filterNews])
    const [allNews, setAllNews] = React.useState([])


    function handleChange(event) {
        const {name, value} = event.target
        setFilterNews(prevFilterNews => {
            return {
                ...prevFilterNews,
                [name]: value
            }
        })
    }
    function searchNews (event) {
        event.preventDefault();     
        const val = document.querySelector('input').value
        fetch(`http://newsapi.org/v2/top-headlines?q=${val}&language=en&apiKey=faf603b411e8416abd64d285b6f31710`)
        .then(res => res.json())
        .then(data => setAllNews(data.articles))
    }
    console.log(allNews)

    return (
        <Router>
        <div>
            <Header/>
            <main>
                <aside>
                <div className='categories__header-div'>
                <h2 className='categories__header'>Filter by category</h2>
                </div>
                <div className='categories__options'>
                <form>
                <select 
                    id="favColor"
                    value={filterNews.category}
                    onChange={handleChange}
                    name="category"
                >
                    <option value="general">All Categories</option>
                    <option value="science">Science</option>p
                    <option value="health">Health</option>
                    <option value="technology">Technology</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                <div className='categories__header-div'>
                <h2 className='categories__header'>Filter by country</h2>
                </div>

                <select 
                    value={filterNews.country}
                    onChange={handleChange}
                    name="country"
                >
                    <option value="us">USA</option>
                    <option value="ng">Nigeria</option>
                    <option value="gb">UK</option>
                    <option value="sa">South Africa</option>
                    <option value="nl">Netherlands</option>
                </select>

                </form>
                <div className='categories__header-div'>
                <h2 className='categories__header'>Filter by Search</h2>
                </div>
                <form className='search__form' onSubmit={searchNews}>
                    <input type='text' placeholder='search' name='searchValue'/>
                    <button className='submit' type='submit'><Search/></button>
                </form>

                </div>
                </aside>
                <div className='aside'>
                <div className='categories__options'>
                <form>
                <select 
                    id="favColor"
                    value={filterNews.category}
                    onChange={handleChange}
                    name="category"
                >
                    <option value="general">All Categories</option>
                    <option value="science">Science</option>p
                    <option value="health">Health</option>
                    <option value="technology">Technology</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                </select>

                <select 
                    value={filterNews.country}
                    onChange={handleChange}
                    name="country"
                >
                    <option value="us">USA</option>
                    <option value="ng">Nigeria</option>
                    <option value="gb">UK</option>
                    <option value="sa">South Africa</option>
                    <option value="nl">Netherlands</option>
                </select>

                </form>
                <form className='search__form' onSubmit={searchNews}>
                    <input type='text' placeholder='search' name='searchValue'/>
                    <button className='submit' type='submit'><Search/></button>
                </form>

                </div>

                </div>
            </main>
            {allNews.length === 0 ? <Error/> :
            <div>
                <Headline news={allNews}/>
                { allNews.length > 3 && <Main news={allNews.slice(3)}/>}
            </div>
             } 
        </div>

        </Router>
    )

}
