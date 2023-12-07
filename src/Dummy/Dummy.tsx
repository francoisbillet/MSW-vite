import { useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const fetchProduct1 = async () => {
  const response = await fetch("https://dummyjson.com/products/1");
  if (!response.ok) {
    throw Error("there was an error");
  }
  return response.json();
};

export const Dummy = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchProduct1()
      .then((data) => {
        setProduct(data);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error !</div>;
  }

  return (
    <section>
      <div>Product title: {product?.title} (from Dummy.tsx)</div>
      <div>Product id: {product?.id}</div>
    </section>
  );
};
