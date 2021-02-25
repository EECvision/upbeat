import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({children, link}) => (
    <li className="w-20 text-sm text-center md:text-base py-1 rounded-lg border border-purple-800 hover:bg-gray-300 mb-2"><NavLink to={link}>{children}</NavLink></li>
)
const Navigation = () => {
    return (
        <nav className="w-full max-w-lg mt-8">
            <ul className="w-full flex flex-wrap justify-between items-center">
                <NavLinks link="/your-music/audio">Audio</NavLinks>
                <NavLinks link="#">Video</NavLinks>
                <NavLinks link="/your-music/gospel">Gospel</NavLinks>
                <NavLinks link="/your-music/highlife">Highlife</NavLinks>
            </ul>
        </nav>
    )
}

export default Navigation;
