//this is not a functional script yet(!) but has been committed for reference only

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home.jsx";
import NoPage from "../src/pages/NoPage.jsx";
import Forecast from "../src/pages/Forecast.jsx";
import About from "../src/pages/About.jsx";
import Contact from "../src/pages/contact.js";

jest.mock("react-player");

// test the pages are creating with correct content
test("renders Home test", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders About Page test", () => {
  render(<About />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders NoPage test", () => {
  render(<NoPage />);
  const linkElement = screen.getByText(/bizcits/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Forecast test", () => {
  render(<Forecast />);
  const linkElement = screen.getByText(/forecast/i);
  expect(linkElement).toBeInTheDocument();
});

//this could be tailored to content on the contact us page
test("renders contact test", () => {
  render(<Contact />);
  const linkElement = screen.getByText(/talk/i);
  expect(linkElement).toBeInTheDocument();
});