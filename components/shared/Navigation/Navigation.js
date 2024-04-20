"use client"
import React from 'react';
import useScreenSize from '../../../hooks/useScreenSize'; // Ścieżka do twojego hooka
import Link from "next/link"
import { HamburgerNav } from './NavigationBar/HamburgerNav/HamburgerNav';
import { NavBar } from './NavigationBar/NavBar';
import { Logo } from '../Logo/Logo';

export const Navigation = () => {
  const screenSize = useScreenSize();

  return (
    <>
      <nav className='container__fixed-width header__nav header__nav--flex'>
        <Link href="/" passHref className="nav__link">
          {/* <Logo logoSize="2.5rem"/> */}
          <Logo/>
        </Link>
        <NavBar/>
      </nav>
    </>
  );
};