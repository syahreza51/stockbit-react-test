import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  resetMovies,
  incrementPage,
} from "../features/movieSlice";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const dispatch = useDispatch();
  const { list, search, page, totalResults, loading } = useSelector(
    (state) => state.movies
  );
  const [keyword, setKeyword] = useState(search);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(resetMovies(keyword));
      dispatch(fetchMovies({ search: keyword, page: 1 }));
    }, 800);
    return () => clearTimeout(delayDebounceFn);
  }, [keyword, dispatch]);

  useInfiniteScroll(() => {
    if (!loading && list.length < totalResults) {
      const nextPage = page + 1;
      dispatch(incrementPage());
      dispatch(fetchMovies({ search, page: nextPage }));
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search movies (e.g. Batman)..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {list.map((m, i) => (
          <MovieCard key={`${m.imdbID}-${i}`} movie={m} />
        ))}
      </div>
      {loading && <p style={{ textAlign: "center" }}>Loading more...</p>}
    </div>
  );
};

export default Home;
