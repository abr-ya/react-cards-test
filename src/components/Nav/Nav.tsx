import React from "react";
import ModeSwither from "components/ModeSwither/ModeSwitherContainer";
import "./Nav.scss";

const Nav = (): JSX.Element => {
  const title = "TS React App";

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">{title}</div>
      <ul className="navbar-nav">[здесь было меню, отключено на gh-pages]</ul>
      <ModeSwither />
    </nav>
  );
};

export default Nav;
