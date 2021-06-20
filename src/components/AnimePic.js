import React from 'react'
import { Link } from 'react-router-dom'

function AnimePic({anime}) {
    return (

        <article className="container-animes">
            <Link to={`/anime/${anime.mal_id}`} className="picsStyle">
                <figure>
                    <img src={anime.image_url} alt="" className="imageStyle" />
                </figure>
                <div className="containerDescription">
                    <h3>{anime.title}</h3>
                    <p>
                    {anime.synopsis}
                    </p>
                </div>
            </Link>
        </article>
    )
}

export default AnimePic
