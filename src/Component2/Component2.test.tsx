import { render, screen } from "@testing-library/react";
import { Component2 } from "./Component2";

describe("Component 2", () => {
  it("should use already defined handler to mock product", async () => {
    render(<Component2 />);

    expect(await screen.findByText(/My mocked product/)).toBeInTheDocument();
  });
});
