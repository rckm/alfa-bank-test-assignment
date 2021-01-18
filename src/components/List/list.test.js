import React from "react";
import { render } from "@testing-library/react";

import { List } from "./index";

const users = [
  { id: 0, login: "rckm" },
  { id: 1, login: "rffensick" },
];

describe("List component", () => {
  it("should render list component", async () => {
    const { findAllByTestId } = render(<List users={users} />);

    const items = await findAllByTestId("item");

    expect(items).toHaveLength(2);
  });
});
