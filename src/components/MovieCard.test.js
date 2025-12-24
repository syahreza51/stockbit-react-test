import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCard from "./MovieCard";

const mockMovie = {
  Title: "Batman Begins",
  Year: "2005",
  Poster: "https://via.placeholder.com/300",
  imdbID: "tt0372784",
};

const RouterWrapper = ({ children }) => (
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    {children}
  </BrowserRouter>
);

describe("MovieCard Component", () => {
  test("harus merender judul film dan tahun", () => {
    render(
      <RouterWrapper>
        <MovieCard movie={mockMovie} />
      </RouterWrapper>
    );

    expect(screen.getByText(/Batman Begins/i)).toBeInTheDocument();
    expect(screen.getByText(/2005/i)).toBeInTheDocument();
  });

  test("harus membuka modal saat gambar poster diklik", () => {
    render(
      <RouterWrapper>
        <MovieCard movie={mockMovie} />
      </RouterWrapper>
    );

    const posterImg = screen.getByAltText(/Batman Begins/i);
    fireEvent.click(posterImg);

    const closeButton = screen.getByText(/Close/i);
    expect(closeButton).toBeInTheDocument();
  });
});
