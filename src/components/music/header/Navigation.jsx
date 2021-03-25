import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState({ audio: true , video: false , gospel: false , highlife: false })

  useEffect(()=>{
    let link = window.sessionStorage.getItem("link");
    link = JSON.parse(link);
    if(!link) return
    setActiveLink(link)
  },[])

  const NavLinks = ({ children, link, clickHandler, k }) => (
    <li onClick={()=>clickHandler()} className={`w-auto text-sm text-center md:text-lg pb-2  border-b-4 border-purple-600 ${activeLink[k] ? 'border-pink-600' : ''}  mb-2`}>
      <NavLink to={link}>{children}</NavLink>
    </li>
  )

  const handleClick = (val) => {
    const { ...newLink } = activeLink
    for( const key in newLink){
      if(key === val){
        newLink[key]=true
      }else{
        newLink[key]=false
      }
    }
    window.sessionStorage.setItem("link",JSON.stringify(newLink))
    setActiveLink(newLink);
  }

  return (
    <nav className="w-full max-w-lg mt-8">
      <ul className="w-full flex flex-wrap justify-evenly items-center">
        <NavLinks clickHandler={() => handleClick('audio')} k="audio" link="/my-music/audio">Audio</NavLinks>
        <NavLinks clickHandler={() => handleClick('gospel')} k="gospel" link="/my-music/gospel">Gospel</NavLinks>
        <NavLinks clickHandler={() => handleClick('highlife')} k="highlife" link="/my-music/highlife">Highlife</NavLinks>
        <NavLinks clickHandler={() => handleClick('video')} k="video" link="/my-music/video">Video</NavLinks>
      </ul>
    </nav>
  )
}


export default Navigation;
