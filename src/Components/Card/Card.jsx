import { useState, useEffect } from "react";
import "./Card.css";

export default function Card({ numero }) {
  const [posts, setPosts] = useState({
    id: "uknown",
    name: "uknown",
    status: "uknown",
    species: "uknown",
    type: "uknown",
    gender: "uknown",
    origin_name: "uknown",
    location_name: "uknown",
    image: "",
    episode: [],
    listInfoClicked: false,
    listEpisodesClicked: false,
  });

  const [info, setInfo] = useState(false);
  const [episodes, setEpisodes] = useState(false);

  function listInfo() {
    setInfo(!info);
  }

  function listEpisodes() {
    setEpisodes(!episodes);
  }

  // TODO: PENDIENTE HACER FETCH A TODAS LAS PAGINAS DONDE HAY PERSONAJES
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts({
          name: data.results[numero].name,
          image: data.results[numero].image,
          status: data.results[numero].status,
          species: data.results[numero].species,
          type: data.results[numero].type,
          gender: data.results[numero].gender,
          origin_name: data.results[numero].origin.name,
          location_name: data.results[numero].location.name,
          episode: data.results[numero].episode,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div className="card-frame">
      <h2 className="name-title">{posts.name}</h2>
      <img className="foto" src={posts.image}></img>
      <br />
      <div className="botones">
        <button onClick={listInfo}>INFO</button>
        {info && (
          <div>
            <ul className="info-list">
              <li>Status: {posts.status}</li>
              <li>Specie: {posts.species}</li>
              <li>Type: {posts.type}</li>
              <li>Gender: {posts.gender}</li>
              <li>Origin: {posts.origin_name}</li>
              <li>Location: {posts.location_name}</li>
            </ul>
          </div>
        )}
        <button onClick={listEpisodes}>EPISODES</button>
        {episodes && (
          <div>
            <ul className="episodes-list">
              {posts.episode.map((episode) => (
                <li key={JSON.stringify(episode)}>{episode}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
