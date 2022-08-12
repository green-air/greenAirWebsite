// to run these tests you will need to install react testing:
//npm install @testing-library/react jest

// to run the tests, open your terminal and run npm run test command

import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "./pages/contact.js";

// jest.mock("react-player");

// test the pages are creating with correct content


//this could be tailored to input content on the contact us page
test("renders contact test", () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});