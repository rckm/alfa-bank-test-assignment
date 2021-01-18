import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Input } from "./index";

describe("Input component", () => {
  it("should handleChange", async () => {
    const handleChange = jest.fn();
    const { findByTestId } = render(<Input onChange={handleChange} name="input" />);
    const input = await findByTestId("input");
    fireEvent.change(input, { target: { value: "rckm" } });

    expect(input.value).toBe("rckm");
  });
});
