import React from 'react'
import AnimePic from './AnimePic'

function Main(props) {
    return (

        

        <main >
            <form 
            onSubmit={props.searchInput} >   
                <input 
                className="searchBar"
                type="search" 
                placeholder="search for an anime" 
                required 
                value={props.search} 
                onChange={find => props.setSearch(find.target.value)}/>
               
                <button className="searchButton">search</button>
            </form>
            <div className="picsWrap">
                {props.animelist.map(anime=>(
                    <AnimePic
                    key={anime.mal_id} /*cualquier valor*/
                    anime={anime}/> /*pasar json*/
                    ))}
            </div>
            
        </main>
        
        )
}
export default Main
