import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="w-full max-w-lg mt-8">
            <ul className="w-full flex flex-wrap justify-between items-center">
                <li className="px-6 py-1 rounded-lg border border-purple-800 hover:bg-gray-100 mb-2"><NavLink to="/your-music/audio">Audio</NavLink></li>
                <li className="px-6 py-1 rounded-lg border border-purple-800 hover:bg-gray-100 mb-2"><NavLink to="#">Video</NavLink></li>
                <li className="px-6 py-1 rounded-lg border border-purple-800 hover:bg-gray-100 mb-2"><NavLink to="/your-music/gospel">Gospel</NavLink></li>
                <li className="px-6 py-1 rounded-lg border border-purple-800 hover:bg-gray-100 mb-2"><NavLink to="/your-music/highlife">High Life</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
