import movieReducer, { resetMovies, incrementPage } from "./movieSlice";

describe("movieSlice Reducer", () => {
  const initialState = {
    list: [],
    totalResults: 0,
    loading: false,
    page: 1,
    search: "Batman",
  };

  test("harus menangani incrementPage", () => {
    const actual = movieReducer(initialState, incrementPage());
    expect(actual.page).toEqual(2);
  });

  test("harus menangani resetMovies", () => {
    const newState = { ...initialState, list: ["movie1"], page: 5 };
    const actual = movieReducer(newState, resetMovies("Superman"));

    expect(actual.search).toEqual("Superman");
    expect(actual.list).toEqual([]);
    expect(actual.page).toEqual(1);
  });
});
