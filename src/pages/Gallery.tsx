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
          gap: "2rem", // 4rem separation between cards and rows
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          justifyContent: "center", // Center the grid
          padding: "0 2rem", // Add padding to both sides
        }}
      >
        {cheesecakesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          div {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          div {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          div {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1201px) {
          div {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
