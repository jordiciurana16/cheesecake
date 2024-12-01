import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Le nostre torte al formaggio</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/gallery">Galleria</Link>
        </li>
        <li>
          <Link to="/compare">Tabella</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
