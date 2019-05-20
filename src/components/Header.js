import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to='/red'>Red</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/yellow'>Yellow</Link>
      </nav>
    </header>
  );
}
