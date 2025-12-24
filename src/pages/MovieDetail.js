import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    axios
      .get(`${API_URL}/?apikey=${API_KEY}&i=${id}`)
      .then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Loading detail...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>Back</button>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <img src={movie.Poster} alt={movie.Title} style={{ width: "300px" }} />
        <div>
          <h1>{movie.Title}</h1>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Cast:</strong> {movie.Actors}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
