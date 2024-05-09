const handlerMenuList = () => {
  const navbar = document.getElementById("menu-list");
  console.log(navbar.classList.contains("translate-x-full"));
  if (navbar.classList.contains("translate-x-full")) {
    navbar.classList.remove("translate-x-full");
    navbar.classList.add("translate-x-0");
  } else {
    navbar.classList.remove("translate-x-0");
    navbar.classList.add("translate-x-full");
  }
};
