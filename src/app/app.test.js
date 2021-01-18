import React from "react";
import { cleanup } from "@testing-library/react";

import App from "./index";
import { render } from "../store/render";

afterEach(cleanup);

describe("App", () => {
  it("should show loading indicator", async () => {
    const { findByTestId } = render(<App />);
    expect(await findByTestId("loading")).toHaveTextContent("Loading ...");
  });
});

// test.skip("app", () => {});
