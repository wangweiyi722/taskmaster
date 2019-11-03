import React from 'react';

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
    <a class="item" onClick={changeActive}>
      Bio
    </a>
    <a class="item active" onClick={changeActive}>
      Photos
    </a>
    <a class="item" onClick={changeActive}>
      Photos
    </a>
  </div>
);
}

export default Header;
