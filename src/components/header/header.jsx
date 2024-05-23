import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#hero">
            <img src="long_logo_large.png" alt="Vineyard Vision Logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li><a className="nav-item" href="#vision">our <span>vision</span></a></li>
            <li><a className="nav-item" href="#mission">our <span>mission</span></a></li>
            <li><a className="nav-item" href="#team">our <span>team</span></a></li>
            <li><a className="nav-item" href="#news">our <span>news</span></a></li>
            <li><a className="nav-item" href="#technology">our <span>technology</span></a></li>
            <li><a className="btn" href="#contact">Let's Talk</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
