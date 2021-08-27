import React, { useState } from "react";
import "./MontaTela.css";
import axios from "axios";

const MontaTela = () => {
  const [pokemon, setPokemon] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonDescricao, setPokemonDescricao]=useState([])

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
    const toArray2 = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
      const res = await axios.get(url);
      const res2 = await axios.get(url2);
      toArray.push(res.data);
      toArray2.push(res2.data);
      setPokemonDescricao(res2.data.flavor_text_entries[12].flavor_text)
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
                <img src={data.sprites.other["official-artwork"].front_default} alt="Sprite" />
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
                  <p>{pokemonDescricao}</p>
                </div>
              </div>
              <div>
                <h2>Moveset</h2>
                <div className="descricao">
                  <p>{data.moves[0].move.name}</p>
                  <p>{data.moves[1].move.name}</p>
                  <p>{data.moves[2].move.name}</p>
                  <p>{data.moves[3].move.name}</p>
                  <p></p>
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
