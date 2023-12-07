import { useEffect, useState } from "react";
import { fetchProduct1 } from "../Dummy/Dummy";

export const Component2 = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchProduct1()
      .then((data) => {
        setProduct(data);
      })
      .catch(() => setError(true));
  }, []);

  return !error ? <div>Component2 : {product?.title}</div> : <div>error</div>;
};
