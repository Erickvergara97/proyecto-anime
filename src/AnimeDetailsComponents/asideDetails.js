import React from 'react'

function AsideDetails(props) {
    return (
        <aside className= "infoAside">
        <img src={props.animeIndex.image_url} alt="" />
        <h2>{props.animeIndex.title}</h2>
        <h3>
            rank:
        </h3>
        <ul>
            <li>
                #{props.animeIndex.rank}
            </li>
        </ul>
        <h3>
            score:
        </h3>
        <ul>
            <li>
                {props.animeIndex.score}/10
            </li>
        </ul>
        <h3>
            genres:
        </h3> 
        <ul>
            {props.animeGenre.map(genre =>(
                <li>
                    {genre.name}
                </li>
            ))}
        </ul>  
        <h3>
            duration:
        </h3>
        <ul>
            <li>
                {props.animeIndex.duration}isode
            </li>
        </ul> 


        <h3>
            popularity:
        </h3>
        <ul>
            <li>
                {props.animeIndex.popularity}
            </li>
        </ul>
    
        
    </aside>
    )
}

export default AsideDetails
