import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="./joel.jpg" alt="cute man" height={100}></img>
        </a>
      </div>
      <div className="navbar-title">
        <h1>Joel's Epic Music Foundation</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/movies">Joel's Movie Bank</a>
        </li>
        <li>
          <a href="/bacon">Joel's Podcast</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
