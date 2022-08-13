// to run these tests you will need to install react testing:
//npm install @testing-library/react jest

// to run the tests, open your terminal and run npm run test command

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./pages/contact.js";

// jest.mock("react-player");

// test the pages are creating with correct content


test("renders contactform test", () => {
  render(<Contact />);
  const nameLabel = screen.getByText(/name/i);
  expect(nameLabel).toBeInTheDocument();
  const emailLabel = screen.getByText(/email/i);
  expect(emailLabel).toBeInTheDocument();
  const msgLabel = screen.getByText(/message/i);
  expect(msgLabel).toBeInTheDocument();
});

test("Inputs should have the correct value", () => {
  render(<Contact />);
  const nameInput = screen.getByTestId("name")
  expect(nameInput.value).toBe("");
  fireEvent.change(nameInput, { target: { value: "D. Duck" } })
  expect(nameInput.value).toBe("D. Duck");
  const emailInput = screen.getByTestId("email")
  expect(emailInput.value).toBe("");
  fireEvent.change(emailInput, { target: { value: "donald@disney.com" } })
  expect(emailInput.value).toBe("donald@disney.com");
  const msgInput = screen.getByTestId("message")
  expect(msgInput.value).toBe("");
  fireEvent.change(msgInput, { target: { value: "Quack quack, love your site!" } })
  expect(msgInput.value).toBe("Quack quack, love your site!");
});
