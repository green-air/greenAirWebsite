// to run these tests you will need to install react testing:
//npm install @testing-library/react jest

// to run the tests, open your terminal and run npm run test command

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Forecast from "./pages/Forecast";
import About from "./pages/About";
import Contact from "./pages/contact.js";

// jest.mock("react-player");

// test the pages are creating with correct content
test('renders Home test', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
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

// !!! API is still being worked on!
// this currently fails because the content is split up into 
// multiple files and the text it is looking for is inside a 
// file imported by Forecast.jsx but not actually in the file itself
test("renders Forecast test", () => {
  render(<Forecast />);
  const linkElement = screen.getByText(/weather/i);
  expect(linkElement).toBeInTheDocument();
});

//this could be tailored to input content on the contact us page
test("renders contact test", () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});