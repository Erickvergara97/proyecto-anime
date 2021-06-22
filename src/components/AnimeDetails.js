import {React, useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import AsideDetails from '../AnimeDetailsComponents/asideDetails';


function AnimeDetails() {
    let {id}=useParams();
    const[animeIndex, setAnimeIndex] = useState([]);
    const[animeGenre, setAnimeGenre] = useState([]);
    

    function SetInfo (data) {
        setAnimeIndex(data);
        setAnimeGenre(data.genres);
    }
    
    useEffect(() => {
        GetAnimeDetails()
    },[id])
    
    const GetAnimeDetails = async (mal) => {
        const data = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
        .then(res => res.json());

        SetInfo(data);
    };

    function hideVideo () {
        if(animeIndex.trailer_url===null){
            return null 
            
        }else{
           return <iframe width="560" height="315" src={animeIndex.trailer_url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
    }

    return (
        <div className="flexDetails">

            <AsideDetails animeIndex={animeIndex} animeGenre={animeGenre}/>


            <section className="infoSection">
                {hideVideo()}
                <h3>synopsis:</h3>
                <p>
                    {animeIndex.synopsis}
                </p>
                <Link to="/">
                    <button >return</button>
                </Link>
            </section>
       

        </div>

    )
}

export default AnimeDetails
