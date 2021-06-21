import React from 'react'
import { Link } from 'react-router-dom'



function TopsAnimes({topanime}) {

    function scrolltop() {
        window.scrollTo(0, 0);
    }
    
    return (
        <section>  
            <h2>top <span>10</span> animes</h2>
            <nav onClick={scrolltop}>
                {topanime.map(anime=>(
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.image_url} className="imageStyle" alt="" />
                        <p>
                            #{anime.rank}
                        </p>
                        <h3 className="topH3">       
                            {anime.title}
                        </h3>
                    </Link>          
                ))}
            </nav>
        </section>
    )
}

export default TopsAnimes

//funcion para map animes y luego llamalo en TopsAnimes
