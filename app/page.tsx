
'use client'

import Image from "next/image";
import Header from './Header';
import { useState } from 'react';

import Collection from './Collection'

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
         <div className="button">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <Header/>
      <Collection/>
      
    </main>
    
  );
}
