import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://dummyjson.com/products/:productId", ({ params }) => {
    const { productId } = params;
    return new HttpResponse.json({ id: productId, title: "My mocked product" });
  }),
];
