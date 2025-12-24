import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Poster"
        }
        alt={movie.Title}
        style={{ width: "100%", borderRadius: "4px", cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      />
      <h4 style={{ margin: "10px 0" }}>{movie.Title}</h4>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} style={{ color: "#007bff" }}>
        View Details
      </Link>

      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
          style={modalStyles.overlay}
        >
          <div className="modal-content" style={modalStyles.content}>
            <img
              src={movie.Poster}
              alt="Full Poster"
              style={{ width: "100%" }}
            />
            <button
              onClick={() => setShowModal(false)}
              style={{ marginTop: "10px" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "90%",
  },
};

export default MovieCard;
