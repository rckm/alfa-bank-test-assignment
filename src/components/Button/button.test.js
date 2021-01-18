import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./index";

describe("Button component", () => {
  it("should click on button correctly", async () => {
    const onClick = jest.fn();
    const { findByTestId } = render(<Button onClick={onClick} />);

    expect(await findByTestId("button")).toBeInTheDocument();
  });
});
