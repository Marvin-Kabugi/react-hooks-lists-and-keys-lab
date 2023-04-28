import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksArray = links.map((element) => {
    return <a href={ `#${element}`  } key={element}>{element}</a>
  })
  return <nav>{ linksArray }</nav>;
}

export default NavBar;
