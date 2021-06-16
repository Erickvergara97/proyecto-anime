import React from 'react'
import { Link, useParams } from "react-router-dom";



function AnimeDetails() {

    let {id}=useParams()

    return (
        <div>
            pagina del anime {id}   
        </div>
    )
}

export default AnimeDetails
