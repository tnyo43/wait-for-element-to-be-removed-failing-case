import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MessageRemoveComponent } from "./MessageRemoveComponent";

test("", async () => {
  render(<MessageRemoveComponent />);
  const user = userEvent.setup();
  const message = screen.getByText("target message");

  await user.click(screen.getByRole("button", { name: "remove message" }));

  await waitForElementToBeRemoved(message);
  expect(screen.queryByText("target message")).not.toBeInTheDocument();
});
