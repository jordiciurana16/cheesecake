import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "../data/movies.json";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = moviesData.find((movie) => movie.id === id);

  if (!movie) {
    return <p>Pel·lícula no trobada.</p>;
  }

  return (
    <div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#333",
        }}
      >
        {movie.title}
      </h1>
      <img
        src={movie.image}
        alt={movie.title}
        style={{
          maxWidth: "600px",
          borderRadius: "10px",
          marginBottom: "1.5rem",
        }}
      />
      <p style={{ fontSize: "1.2rem", color: "#666" }}>{movie.description}</p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>
        Publicació: {movie.releaseDate}
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#f39c12" }}>
        Puntuació: {movie.rating}
      </p>
    </div>
  );
};

export default MovieDetails;
