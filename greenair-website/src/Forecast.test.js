// to run these tests you will need to install react testing:
//npm install @testing-library/react jest

// to run the tests, open your terminal and run npm run test command

import React from "react";
import { render, screen } from "@testing-library/react";

import Forecast from "./pages/Forecast";


// jest.mock("react-player");

// test the pages are creating with correct content


// !!! API is still being worked on!
// this currently fails because the content is split up into 
// multiple files and the text it is looking for is inside a 
// file imported by Forecast.jsx but not actually in the file itself
test("renders Forecast test", () => {
  render(<Forecast />);
  const linkElement = (screen.getAllByText(/Postcode/i)[0])
  expect(linkElement).toBeInTheDocument();
  
  
});

