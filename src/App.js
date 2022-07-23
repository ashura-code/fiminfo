import React from 'react';
import { useEffect } from 'react';
import Move from './Move';
import {useState} from 'react';


//https://www.omdbapi.com/?i=tt3896198&apikey=8348aa87

function App() {
  
  const api = 'https://www.omdbapi.com/?i=tt3896198&apikey=8348aa87';

  const [mov_card,setmov_card] = useState([]);

  const searchmovies = async (title) =>{
    const response  = await fetch(`${api}&s=${title}`);
    const data  = await response.json();
    setmov_card(data.Search); 
    console.log(data.Search);

  };
  
  const card = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
};
  const [Search,setSearch] = useState(' ') ;
  useEffect(() => { 
    searchmovies(Search);
    
  },[Search]);
 
  return (
    <div className='app'>
    <h1 className='app-title'>Filminfo</h1>
    <input 

        className="entry"
        placeholder="Search for movies" 
        type="text" value ={Search} 
        onChange={(e)=>{setSearch(e.target.value)}}>

        </input>

   <hr/>

   {
    mov_card?.length > 0 ?(
      <div className='content'>
      {
        mov_card.map((n)=>(
          <Move card ={n}/>
        ))
      }
      </div>
    ):
    (
      <div className='empty'>
        <h2>No Movies Found</h2>
      </div>
    )

   }

   
    
    </div>
  );
}

export default App;
