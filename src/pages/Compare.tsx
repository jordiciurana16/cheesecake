import React, { useState } from "react";
import moviesData from "../data/movies.json"; // Importem el fitxer JSON

const Compare: React.FC = () => {
  const [sortBy, setSortBy] = useState<"rating" | "releaseDate">("rating");

  // Ordena les pel·lícules segons el criteri seleccionat
  const sortedMovies = [...moviesData].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating; // Ordena per puntuació descendent
    } else {
      return (
        new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      ); // Ordena per data ascendent
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
            setSortBy(e.target.value as "rating" | "releaseDate")
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
                backgroundColor: index % 2 === 0 ? "#fefefe" : "#f9f9f9", // Colors alternats per files
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
