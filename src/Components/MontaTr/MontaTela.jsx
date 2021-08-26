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
              <div>
                <h2>Descrição</h2>
                <div className="descricao">
                  <p>Peso: {Math.round(data.weight / 4.3)} lbs</p>
                  <p>Altura: {Math.round(data.height * 3.9)}</p>
                  <p>Exp: {data.base_experience}</p>
                  <p>
                    Habilidades: {data.abilities[0].ability.name}
                  </p>
                </div>
              </div>
              <div>
                <h2>Moveset</h2>
                <div className="descricao">
                  <p>{data.moves[0].move.name}</p>
                  <p>{data.moves[1].move.name}</p>
                  <p>{data.moves[2].move.name}</p>
                  <p>{data.moves[3].move.name}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} className="buttons">
        <button onClick={diminuiPoke} className="button">Anterior</button>
        <p className="indice">{pokemon}</p>
        <button onClick={mudaPoke} className="button">Proximo</button>
      </form>
    </div>
  );
};

export default MontaTela;
