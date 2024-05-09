const handlerMenuList = () => {
  const navbar = document.getElementById("menu-list");
  console.log(navbar.classList.contains("translate-x-full"));
  if (navbar.classList.contains("translate-x-full")) {
    navbar.classList.remove("hidden");
    navbar.classList.add("flex");
    navbar.classList.remove("translate-x-full");
    navbar.classList.add("translate-x-0");
  } else {
    navbar.classList.remove("translate-x-0");
    navbar.classList.add("translate-x-full");
    navbar.classList.remove("flex");
    navbar.classList.add("hidden");
  }
};
