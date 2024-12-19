import React, { useState } from "react";

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
    <div
      style={{
        perspective: "1000px", // Per a l'efecte 3D
      }}
    >
      <div
        onClick={toggleFlip}
        style={{
          width: "280px",
          height: "405px",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
          transition: "transform 0.6s ease",
          cursor: "pointer",
        }}
      >
        {/* Part Frontal */}
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
          <div
            style={{
              padding: "1rem",
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
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
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

        {/* Part Posterior */}
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
            textAlign: "center",
            padding: "1rem",
            transform: "rotateY(180deg)",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: "#333",
              lineHeight: "1.5",
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
