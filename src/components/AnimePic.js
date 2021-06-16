import React from 'react'
import { Link } from 'react-router-dom'

function AnimePic({anime}) {
    return (

        <article className="container-animes">
            <Link to={`/anime/${anime.mal_id}`} className="picsStyle">
                <figure >
                    <img src={anime.image_url} alt="" />
                </figure>
                <h3>{anime.title}</h3>
            </Link>
        </article>
    )
}

export default AnimePic
