import React, { useState, useEffect } from "react";
import "./MontaTela.css";
import axios from "axios";

const MontaTela = () => {
  const [pokemon, setPokemon] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonMoves, setPokemonMoves] = useState("");
  const [pokemonDescricao, setPokemonDescricao] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  function adicionaPoke() {
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
      setPokemonDescricao(res2.data.flavor_text_entries[0].flavor_text);
      setPokemonType(res.data.types[0].type.name);

      setPokemonMoves(res.data.moves);

      setPokemonData(toArray);
    } catch (e) {
      console.log("missing.no");
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
                <div className="imagemBg-inner">
                  <div className="imagemBg-front">
                    <img
                      src={data.sprites.other["official-artwork"].front_default}
                      alt="Sprite"
                    />
                  </div>
                  <div className="imagemBg-back">
                    <p>HP: {data.stats[0].base_stat}</p>
                    <p>ATK: {data.stats[1].base_stat}</p>
                    <p>DEF: {data.stats[2].base_stat}</p>
                    <p>SP ATK: {data.stats[3].base_stat}</p>
                    <p>SP DEF: {data.stats[4].base_stat}</p>
                    <p>SPD: {data.stats[5].base_stat}</p>
                  </div>
                </div>
              </div>
              <div>
                <h2>Descrição</h2>
                <div className="descricao">
                  <p>Peso: {Math.round(data.weight / 4.3)} lbs</p>
                  <p>Altura: {Math.round(data.height * 3.9)}</p>
                  <p>Exp: {data.base_experience}</p>
                  <p>Habilidades: {data.abilities[0].ability.name}</p>
                  <p>{pokemonDescricao}</p>
                </div>
              </div>
              <div>
                <h2>Moveset</h2>
                <div className="moveset">
                  {pokemonMoves.map((moves, index) => {
                    return index < 4 &&(<p key={index}>{moves.move.name}</p>)
                  })}
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} className="buttons">
        <button onClick={pokemon<1?setPokemon(898):diminuiPoke} className="button">
          Anterior
        </button>
        <p className="indice">{pokemon}</p>
        <button onClick={pokemon>898?setPokemon(1):adicionaPoke} className="button">
          Proximo
        </button>
      </form>
    </div>
  );
};

export default MontaTela;
