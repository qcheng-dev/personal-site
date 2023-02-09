import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/photo.jpeg`} alt="" />
      </Link>
      <header>
        <h3>Qian Cheng, PH.D.</h3>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>A researcher, scientist, engineer or whatever. This is my personal website.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Qian Cheng, 2023.</p>
    </section>
  </section>
);

export default SideBar;
