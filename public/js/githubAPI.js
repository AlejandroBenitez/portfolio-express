fetch("https://api.github.com/users/AlejandroBenitez/repos")
  .then((response) => response.json())
  .then((data) => console.log("Cargado"));
