import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Navbar from "../components/Navbar";

//navbar component
test("renders Navbar with heading", () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );

  const NavbarElementHeading = screen.getByText("News Archive");
  const NavbarElementImg = screen.getByAltText("logo");
  expect(NavbarElementImg).toBeInTheDocument();
  expect(NavbarElementHeading).toBeInTheDocument();
});
