// to run these tests you will need to install react testing:
//npm install @testing-library/react jest

// to run the tests, open your terminal and run npm run test command

import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "./pages/contact.js";

// jest.mock("react-player");

// test the pages are creating with correct content


//this could be tailored to input content on the contact us page
test("renders contactform test", () => {
  render(<Contact />);
  const nameLabel = screen.getByText(/name/i);
  expect(nameLabel).toBeInTheDocument();
  const emailLabel = screen.getByText(/email/i);
  expect(emailLabel).toBeInTheDocument();
  const msgLabel = screen.getByText(/message/i);
  expect(msgLabel).toBeInTheDocument();
});

