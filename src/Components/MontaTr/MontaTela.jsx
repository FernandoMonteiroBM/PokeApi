import React, { useState } from "react";
import "./MontaTela.css";
import axios from "axios";

const MontaTela = () => {
  const [pokemon, setPokemon] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  function mudaPoke() {
    setPokemon(pokemon + 1);
  }
  function diminuiPoke() {
    setPokemon(pokemon - 1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button onClick={diminuiPoke}>Anterior</button>
        <button onClick={mudaPoke}>Proximo</button>
      </form>

      {pokemonData.map((data) => {
        return (
          <div className="container">
            <div>
              <div className="tipoNome">
                <h2 className="name">{data.name}</h2>
                <h2 className="tipo">Tipo: {pokemonType}</h2>
              </div>
              <div className="imagemBg">
                <img src={data.sprites["front_default"]} alt="Sprite" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MontaTela;
//{Math.round(data.weight / 4.3)} lbs
//{Math.round(data.height * 3.9)}"
