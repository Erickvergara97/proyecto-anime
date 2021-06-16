import React from 'react'
import { Link } from 'react-router-dom'

function TopsAnimes({topanime}) {
    return (
        <section>  
            <h3>top <span>10</span> animes</h3>
            <nav>
            {topanime.map(anime=>(
                <Link to={`/anime/${anime.mal_id}`} target="_blank" rel="noreferrer" key={anime.mal_id}>
                    {anime.title}
                </Link>          
            ))}
            </nav>
        </section>
    )
}

export default TopsAnimes

//funcion para map animes y luego llamalo en TopsAnimes
