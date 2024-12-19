import React, { useState } from "react";
import moviesData from "../data/movies.json"; // Importamos el JSON

const Compare: React.FC = () => {
  const [sortBy, setSortBy] = useState<"rating" | "releaseDate" | "location">(
    "rating"
  );

  // Ordenar las películas según el criterio seleccionado
  const sortedMovies = [...moviesData].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating; // Ordenar por puntuación descendente
    } else if (sortBy === "releaseDate") {
      return (
        new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      ); // Ordenar por fecha ascendente
    } else {
      return a.location.localeCompare(b.location); // Ordenar por ciudad alfabéticamente
    }
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#333",
          textAlign: "center",
        }}
      >
        Tabella comparativa
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <label
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginRight: "0.5rem",
            color: "#333",
          }}
        >
          Ordena per:
        </label>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as "rating" | "releaseDate" | "location"
            )
          }
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="rating">Puntuació</option>
          <option value="releaseDate">Data de publicació</option>
          <option value="location">Ciutat</option>
        </select>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f8f9fa" }}>
            <th
              style={{
                padding: "1rem",
                textAlign: "left",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #ddd",
              }}
            >
              Títol
            </th>
            <th
              style={{
                padding: "1rem",
                textAlign: "left",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #ddd",
              }}
            >
              Ciutat
            </th>
            <th
              style={{
                padding: "1rem",
                textAlign: "left",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #ddd",
              }}
            >
              Puntuació
            </th>
            <th
              style={{
                padding: "1rem",
                textAlign: "left",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #ddd",
              }}
            >
              Data de publicació
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((movie, index) => (
            <tr
              key={movie.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#fefefe" : "#f9f9f9", // Colores alternados para las filas
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f1f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#fefefe" : "#f9f9f9";
              }}
            >
              <td
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid #ddd",
                  color: "#555",
                }}
              >
                {movie.title}
              </td>
              <td
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid #ddd",
                  color: "#555",
                }}
              >
                {movie.location}
              </td>
              <td
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid #ddd",
                  color: "#555",
                }}
              >
                {movie.rating}
              </td>
              <td
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid #ddd",
                  color: "#555",
                }}
              >
                {movie.releaseDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Compare;
