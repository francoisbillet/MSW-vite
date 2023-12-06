import { http, HttpResponse } from "msw";

const product = { id: "1", title: "My mocked product" };

export const handlers = [
  http.get("https://dummyjson.com/products/:productId", () => {
    return HttpResponse.json(product);
  }),
];
