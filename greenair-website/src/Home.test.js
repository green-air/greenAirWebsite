// to run these tests you will need to install react testing:
//npm install @testing-library/react jest

// to run the tests, open your terminal and run npm run test command

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";


// jest.mock("react-player");

// test the pages are creating with correct content
test('renders Home test', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

