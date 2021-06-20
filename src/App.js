import {useState, useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './style.css';
import Header from './components/Header';
import TopsAnimes from './components/TopsAnimes';
import Main from './components/Main';
import AnimeDetails from './components/AnimeDetails';

function App() {
  const[animelist, setAnimelist] = useState([]);
  const[topanime, setTopanime] = useState([]);
  const[search, setSearch] = useState("");

  function scrolltop() {
    window.scrollTo(0, 0);
  }

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());

    setTopanime(temp.top.slice(0,10));
  };

  useEffect( () => {
    GetTopAnime();
  }, []);

  const searchInput = event =>{
    event.preventDefault();

    fetchAnime(search);
  }

  const fetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => {
        console.log(res)
        return res.json()});

    setAnimelist(temp.results);
  }
 
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="flexContent">
          <Route exact path="/">
            <Main
              searchInput={searchInput} 
              search={search} 
              animelist={animelist} 
              setSearch={setSearch}
              />
          </Route>
          <Route path="/anime/:id">
            <AnimeDetails />
          </Route>
            <TopsAnimes topanime={topanime}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
