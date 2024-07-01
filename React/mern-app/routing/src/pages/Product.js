import { useEffect, useState } from "react";

function Product() {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/product");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Data is loading</h1>
      ) : (
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product._id}>{product.product_name}</li>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Product;
