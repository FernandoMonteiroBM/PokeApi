function ValidaTipo(pokemonType, setPokemonType) {
  if (pokemonType === "grass") {
    return setPokemonType("Grama");
  }
  if (pokemonType === "fire") {
    return setPokemonType("Fogo");
  }
  if (pokemonType === "water") {
    return setPokemonType("Agua");
  }

  if (pokemonType === "dark") {
    return setPokemonType("Escuridão");
  }
  if (pokemonType === "psychic") {
    return setPokemonType("Psiquico");
  }
  if (pokemonType === "bug") {
    return setPokemonType("Inseto");
  }
  if (pokemonType === "dragon") {
    return setPokemonType("Dragão");
  }
  if (pokemonType === "electric") {
    return setPokemonType("Eletrico");
  }
  if (pokemonType === "fairy") {
    return setPokemonType("Fada");
  }
  if (pokemonType === "fighting") {
    return setPokemonType("Lutador");
  }
  if (pokemonType === "flying") {
    return setPokemonType("Voador");
  }
  if (pokemonType === "ghost") {
    return setPokemonType("Fantasma");
  }
  if (pokemonType === "ground") {
    return setPokemonType("Terra");
  }
  if (pokemonType === "ice") {
    return setPokemonType("Gelo");
  }
  if (pokemonType === "poison") {
    return setPokemonType("Veneno");
  }
  if (pokemonType === "rock") {
    return setPokemonType("Pedra");
  }
  if (pokemonType === "steel") {
    return setPokemonType("Aço");
  }
}
function mudaBody(pokemonType) {
  if (pokemonType === "grass") {
    return (document.body.style = "background: rgb(11, 136, 0);");
  }
  if (pokemonType === "fire") {
    return (document.body.style = "background: red;");
  }
  if (pokemonType === "water") {
    return (document.body.style = "background: blue;");
  }
  if (pokemonType === "bug") {
    return (document.body.style = "background: rgb(11, 218, 0);");
  }
  if (pokemonType === "dark") {
    return (document.body.style = "background: rgb(33, 32, 62)");
  }
  if (pokemonType === "psychic") {
    return (document.body.style = "background: rgb(93, 32, 128)");
  }
  if (pokemonType === "dragon") {
    return (document.body.style = "background: rgb(52, 137, 169)");
  }
  if (pokemonType === "electric") {
    return (document.body.style = "background: rgb(255, 189, 0)");
  }
  if (pokemonType === "fairy") {
    return (document.body.style = "background: rgb(254, 1, 69)");
  }
  if (pokemonType === "fighting") {
    return (document.body.style = "background: rgb(199, 1, 0)");
  }
  if (pokemonType === "flying") {
    return (document.body.style = "background: rgb(121, 159, 254)");
  }
  if (pokemonType === "ghost") {
    return (document.body.style = "background: rgb(61, 0, 89)");
  }
  if (pokemonType === "ground") {
    return (document.body.style = "background: rgb(198, 118, 0)");
  }
  if (pokemonType === "ice") {
    return (document.body.style = "background: rgb(118, 141, 254)");
  }
  if (pokemonType === "poison") {
    return (document.body.style = "background: rgb(61, 0, 89)");
  }
  if (pokemonType === "rock") {
    return (document.body.style = "background: rgb(209, 112, 0)");
  }
  if (pokemonType === "steel") {
    return (document.body.style = "background: rgb(200, 200, 200)");
  }
  if (pokemonType === "normal") {
    return (document.body.style = "background: rgb(200, 200, 200)");
  }
}

export { ValidaTipo, mudaBody };
