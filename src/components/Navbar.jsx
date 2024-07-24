import { IconSearch } from '@tabler/icons-react';
import React from 'react'


const Navbar = () => {
  return (
     <div className="bg-slate-700 text-white py-4 px-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
           <span className="text-2xl font-bold">Sirish's Blog</span>
        </div>
        <nav className="space-x-4">
           <a href="#" className="hover:text-primary">
              Sport
           </a>
           <a href="#" className="hover:text-primary">
              Health
           </a>
           <a href="#" className="hover:text-primary">
              Political
           </a>
           <a href="#" className="hover:text-primary">
              Business
           </a>
           <a href="#" className="hover:text-primary">
              Finance
           </a>
           <a href="#" className="hover:text-primary">
              Life
           </a>
           <a href="#" className="hover:text-primary">
              Entertainment
           </a>
        </nav>
        <div className="flex items-center space-x-4">
           <button undefinedlabel="Search" className="focus:outline-none">
              <IconSearch />
           </button>
           <div className="space-y-1">
              <a href="#" className="block hover:text-primary">
                 Login
              </a>
              <a href="#" className="block hover:text-primary">
                 Register
              </a>
           </div>
        </div>
     </div>
  );
}

export default Navbar