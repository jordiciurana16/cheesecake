import React from "react";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json"; // Importem les dades del fitxer JSON

const Gallery: React.FC = () => {
  return (
    <main
      style={{
        padding: "2rem", // Manté el padding per al contingut
      }}
    >
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
          gridTemplateColumns: "repeat(4, 1fr)", // Fixem 4 columnes per fila
          gap: "1.5rem", // Espai entre targetes
        }}
      >
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Gallery;
