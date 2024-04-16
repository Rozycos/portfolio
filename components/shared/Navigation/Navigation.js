"use client"
import React from 'react';
import useScreenSize from '../../../hooks/useScreenSize'; // Ścieżka do twojego hooka
import { HamburgerNav } from './HamburgerNav/HamburgerNav';
import { NavBar } from './NavigationBar/NavBar';

export const Navigation = () => {
  const screenSize = useScreenSize();

  return (
    <div>
      {screenSize === 'smallScreen' ? <HamburgerNav/> : <NavBar/>}
      {/* {screenSize === 'smallScreen' && <p>Mały ekran</p>}
      {screenSize === 'mediumScreen' && <p>Średni ekran</p>}
      {screenSize === 'largeScreen' && <p>Duży ekran</p>} */}
    </div>

  );
};