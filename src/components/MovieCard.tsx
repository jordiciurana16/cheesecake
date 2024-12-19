import React from "react";

interface MovieProps {
  movie: {
    id: string;
    title: string;
    description: string;
    releaseDate: string;
    location: string;
    image: string;
    rating: number;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const getRatingColor = (rating: number): string => {
    if (rating < 5) return "#ff6b6b"; // Rojo
    if (rating <= 6) return "#ffa502"; // Naranja
    if (rating <= 8.4) return "#badc58"; // Verde claro
    return "#6ab04c"; // Verde oscuro
  };

  return (
    <div
      style={{
        backgroundColor: "#fff", // Fondo blanco para toda la tarjeta
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        maxWidth: "280px",
        margin: "0 auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Encabezado: Título y Ubicación */}
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fff", // Fondo blanco como el resto de la tarjeta
          borderBottom: "1px solid #eee",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#333",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.title}
        </h3>
        <p
          style={{
            margin: "0.3rem 0 0 0",
            fontSize: "0.9rem",
            color: "#555",
            fontStyle: "italic",
          }}
        >
          {movie.location}
        </p>
      </div>

      {/* Imagen con márgenes */}
      <div
        style={{
          padding: "1rem", // Espacios alrededor de la imagen
        }}
      >
        <img
          src={movie.image}
          alt={movie.title}
          style={{
            width: "100%",
            aspectRatio: "1 / 1", // Relación de aspecto cuadrada
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* Cuerpo: Descripción, Fecha y Puntuación */}
      <div
        style={{
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.95rem",
            color: "#555",
            textAlign: "justify",
            lineHeight: "1.4",
          }}
        >
          {movie.description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              color: "#999",
              fontStyle: "italic",
            }}
          >
            {movie.releaseDate}
          </span>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: getRatingColor(movie.rating),
            }}
          >
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
