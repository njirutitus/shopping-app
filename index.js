const root = document.getElementById("root");
const menu = ["home", "about", "contact", "Login", "Cart"];

function nav(menu) {
  let navBar = document.createElement("nav");
  for (let item in menu) {
    const a = document.createElement("a");
    a.innerHTML = menu[item];
    navBar.appendChild(a);
  }
  return navBar;
}

function hero() {
  let hero = document.createElement("div");
  hero.className = "hero";
  let h1 = document.createElement("h1");
  h1.innerHTML = "Welcome to the store";
  hero.appendChild(h1);
  return hero;
}

function featuredProducts(products) {
  let featured = document.createElement("div");
  featured.className = "featured";
  let h2 = document.createElement("h2");
  h2.innerHTML = "Featured Products";
  featured.appendChild(h2);
  return featured;
}

root.appendChild(nav(menu));
root.appendChild(hero());
root.appendChild(featuredProducts());
