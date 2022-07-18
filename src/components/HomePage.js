import React from 'react'
import MovieList from './MovieList';
import { useState, useEffect } from "react";
import "./homePage.css";
import NavBar from './NavBar';


function HomePage() {
    const [likelist, setLikeList] = useState([]);
    const [blocklist,setBlockList] = useState([]);
  
    const addLike = (item) => {
      const preventRepeat = likelist.find((elem) => {
        return elem.data.id === item.data.id;
      });
      if (!preventRepeat){
        const items = [...likelist];
        items.push(item);
        setLikeList(items);
      } else {
        console.log('element already exist');
      }
    }
  
    const addBlock = (item) => {
      const items = [...blocklist];
      items.push(item);
      setBlockList(items);
        
    }
  
    //ComponentDidUpdate -> Prevent 
    useEffect(() => {
      // console.log(likelist);
      console.log(blocklist);
    },[blocklist]);

    
  

  return (
    <div className='HomePage'>
        <NavBar/>
        {/* <MovieList likes={addLike} blocks={addBlock}/> */}
    </div>
    
  )
}

export default HomePage