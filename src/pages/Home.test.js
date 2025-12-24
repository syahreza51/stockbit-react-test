import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Home from "./Home";

test("input search harus bisa diketik oleh user", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/Search movies/i);
  fireEvent.change(inputElement, { target: { value: "Avengers" } });

  expect(inputElement.value).toBe("Avengers");
});
