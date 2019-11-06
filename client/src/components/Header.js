import React from 'react';
import {Link} from 'react-router-dom';

const changeActive = (e) => {
  var active = document.getElementsByClassName("item active");
  console.log(active);
  active[0].className="item";
  console.log(e.target.className);
  e.target.className="item active";
}

const Header = () => {
  return (
    <div class="ui tabular menu">
    <Link to="/" class="item" onClick={changeActive}>
      Home
    </Link>
    <Link to="/events" class="item active" onClick={changeActive}>
      Events
    </Link>
    <Link to="/mytasks" class="item" onClick={changeActive}>
      My Tasks
    </Link>
  </div>
);
}

export default Header;
