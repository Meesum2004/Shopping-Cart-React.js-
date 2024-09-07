import { useEffect, useState } from "react";
import { getAllProduct } from "./utiles/Product";
import Card from "./components/Card";

export function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {}, [cartItems]);

  const addCartItem = (item) => {
    const item = [...cartItems];
    items.push[item];
    setCartItems([...items]);
  };

  const fetchProducts = async () => {
    const products = await getAllProduct();
    setProducts([...products]);
    console.log(products);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex items-center justify-center gap-10">
        <h1 className="text-center text-4xl">Shopping List</h1>
        <h1 className="text-center text-4xl underline">
          Cart Items: {cartItems.length}
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((data) => (
              <Card key={data.id} item={data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
