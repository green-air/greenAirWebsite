// to run these tests you will need to install react testing:
//npm install @testing-library/react jest

// to run the tests, open your terminal and run npm run test command

import React from "react";
import { render, screen } from "@testing-library/react";

import About from "./pages/About";


// jest.mock("react-player");

// test the pages are creating with correct content


test("renders About Page test", () => {
  render(<About />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});


