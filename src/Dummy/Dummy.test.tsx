import { render, screen } from "@testing-library/react";
import { Dummy } from "./Dummy";
import { server } from "../mocks/server";
import { HttpResponse, delay, http } from "msw";

describe("Dummy", () => {
  it("should display product title", async () => {
    render(<Dummy />);

    await screen.findByText(/My mocked product/);
  });

  it("should display error", async () => {
    server.use(
      http.get("https://dummyjson.com/products/:productId", () => {
        return new HttpResponse("Not found", { status: 404 });
      })
    );

    render(<Dummy />);

    expect(await screen.findByText(/Error/)).toBeInTheDocument();
  });

  it("should display loader", async () => {
    server.use(
      http.get("https://dummyjson.com/products/:productId", async () => {
        await delay("infinite");
        return new HttpResponse();
      })
    );

    render(<Dummy />);

    expect(await screen.findByText(/Loading.../)).toBeInTheDocument();
    expect(screen.queryByText(/My mocked product/)).toBeNull();
  });
});
