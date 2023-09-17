import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MessageRemoveComponent } from "./MessageRemoveComponent";

describe("the message disappears after a certain period of time", () => {
  test.each([[0], [1000]])(
    "in case the time until the message dissapears is %p ms",
    async (duration) => {
      render(<MessageRemoveComponent duration={duration} />);
      const user = userEvent.setup();
      const message = screen.getByText("target message");

      await user.click(screen.getByRole("button", { name: "remove message" }));

      await waitForElementToBeRemoved(message);
      expect(screen.queryByText("target message")).not.toBeInTheDocument();
    }
  );
});
