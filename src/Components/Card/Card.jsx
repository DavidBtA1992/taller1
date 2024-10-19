import { useState, useEffect, } from "react";
import "./Card.css";

export default function Card(props) {
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
  });

  function handleInfo() {
    return (
      <div>
        {/*         <ul className="info-list">
          <li>Status: {posts.status}</li>
          <li>Specie: {posts.species}</li>
          <li>Type: {posts.type}</li>
          <li>Gender: {posts.gender}</li>
          <li>Origin: {posts.origin_name}</li>
          <li>Location: {posts.location_name}</li>
        </ul> */}
      </div>
    );
  }

  function handleEpisodes() {
    <div>
      <ul className="episodes-list">
        {posts.episode.map((episode) => (
          <li key={JSON.stringify(episode)}>{episode}</li>
        ))}
      </ul>
    </div>;
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts({
          id: data.results[0].id,
          name: data.results[0].name,
          status: data.results[0].status,
          species: data.results[0].species,
          type: data.results[0].type,
          gender: data.results[0].gender,
          origin_name: data.results[0].origin.name,
          location_name: data.results[0].location.name,
          image: data.results[0].image,
          episode: data.results[0].episode,
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
        <button onClick={handleInfo}>INFO</button>
        <button onClick={handleEpisodes}>EPISODES</button>
      </div>
    </div>
  );
}
