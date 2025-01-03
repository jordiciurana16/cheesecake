import React, { useState } from "react";

interface Movie {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  location: string;
  image: string;
  rating: number;
  mapLink: string;
}

interface MovieProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const getRatingColor = (rating: number): string => {
    if (rating < 5) return "#ff6b6b"; // Rojo
    if (rating <= 6) return "#ffa502"; // Naranja
    if (rating <= 8.4) return "#badc58"; // Verde claro
    return "#6ab04c"; // Verde oscuro
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        onClick={toggleFlip}
        style={{
          width: "100%",
          aspectRatio: "2 / 3", // Aspect ratio 2:3
          position: "relative",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
          transition: "transform 0.6s ease",
          cursor: "pointer",
        }}
      >
        {/* Parte Frontal */}
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fff",
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
            <a
              href={movie.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0.3rem 0 0 0",
                fontSize: "0.9rem",
                color: "#808080", // Color gris por defecto
                fontStyle: "italic",
                textDecoration: "none", // Sin subrayado por defecto
                transition: "color 0.2s ease, text-decoration 0.2s ease", // Transiciones suaves
              }}
              onClick={(e) => e.stopPropagation()} // Evita que el clic gire la tarjeta
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline"; // Subrayar al hacer hover
                e.currentTarget.style.color = "#666"; // Cambiar a un gris más oscuro
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none"; // Quitar el subrayado al salir del hover
                e.currentTarget.style.color = "#808080"; // Volver al gris original
              }}
            >
              {movie.location}
            </a>
          </div>
          <div
            style={{
              paddingTop: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
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

        {/* Parte Posterior */}
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#f8f8f8",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            transform: "rotateY(180deg)",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "#333",
              lineHeight: "1.5",
              whiteSpace: "pre-line", // Respeta los saltos de línea
              fontStyle: "italic",
            }}
          >
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
