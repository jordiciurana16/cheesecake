import React from "react";

interface MovieProps {
  movie: {
    id: string;
    title: string;
    description: string;
    releaseDate: string;
    image: string;
    rating: number;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  // Funció per obtenir el color segons la puntuació
  const getRatingColor = (rating: number): string => {
    if (rating < 5) return "#ff6b6b"; // Vermell
    if (rating <= 6) return "#ffa502"; // Taronja
    if (rating <= 8.4) return "#badc58"; // Verd fluix
    return "#6ab04c"; // Verd fort
  };

  return (
    <div
      style={{
        backgroundColor: "#fff", // Fons blanc per a tota la card
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        maxWidth: "280px", // Límita la mida màxima de la targeta
        margin: "0 auto", // Centra les targetes dins de cada columna
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
      {/* Header de la card */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#fff", // Fons blanc
          borderBottom: "1px solid #eee",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {movie.title}
        </h3>
        <span
          style={{
            fontSize: "0.9rem",
            color: "#999",
            fontWeight: "bold",
          }}
        >
          {movie.releaseDate}
        </span>
      </div>

      {/* Contenidor per a la imatge i el contingut */}
      <div
        style={{
          padding: "1rem", // Afegim padding consistent al voltant de la imatge i el contingut
        }}
      >
        {/* Imatge */}
        <img
          src={movie.image}
          alt={movie.title}
          style={{
            width: "100%",
            aspectRatio: "1 / 1", // Relació d'aspecte 1:1
            objectFit: "cover", // Manté el contingut de la imatge ajustat
            borderRadius: "8px",
          }}
        />

        {/* Cos de la card */}
        <div
          style={{
            marginTop: "1rem", // Espai entre la imatge i el contingut
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              color: "#555",
              flex: 1,
            }}
          >
            {movie.description}
          </p>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: getRatingColor(movie.rating), // Només la nota canvia de color
              marginLeft: "1rem",
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
