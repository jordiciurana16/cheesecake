import React from "react";
import MovieCard from "../components/MovieCard";
import cheesecakesData from "../data/cheesecakes.json";

const Gallery: React.FC = () => {
  return (
    <div style={{ overflowX: "hidden", padding: "2rem" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          color: "#333",
          textAlign: "center",
        }}
      >
        Galleria di torte
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {cheesecakesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
