import { useEffect, useState } from "react";

export const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/products/1");
  if (!response.ok) {
    throw Error("there was an error");
  }
  return response.json();
};

export const Dummy = () => {
  const [product, setProduct] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
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
    </section>
  );
};
