import { useEffect, useState } from "react";
import "./App.css";
import { getAllProduct } from "./utiles/Product";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartItems, setShowCartItems] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const itemsInCart = JSON.parse(localStorage.getItem("cart"));
    if (itemsInCart) {
      setCartItems(itemsInCart);
    }
  }, []);

  // Store cart items in localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addCartItem = (item) => {
    const existingItem = cartItems.find((product) => product.id === item.id);
    if (!existingItem) {
      setCartItems([...cartItems, item]);
    }
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((product) => product.id !== item.id);
    setCartItems(updatedCart);
  };

  const fetchProducts = async () => {
    const products = await getAllProduct();
    setProducts(products);
  };

  // Toggle between products and cart items
  const displayedItems = showCartItems ? cartItems : products;

  return (
    <div className="container mx-auto my-10">
      <div className="fixed w-full bg-gray-100 h-[100px] top-0 flex items-center justify-center gap-10">
        <h1 className="text-center text-4xl">Shopping List</h1>
        <button
          onClick={() => setShowCartItems(!showCartItems)}
          className="text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 font-bold py-2 px-6 rounded-lg text-2xl transition-all ease-in-out duration-200"
        >
          {showCartItems ? "Show All Products" : `Cart Items (${cartItems.length})`}
        </button>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {displayedItems.map((data) => {
              const isInCart = cartItems.some((product) => product.id === data.id);
              return (
                <Card
                  key={data.id}
                  item={data}
                  isInCart={isInCart}
                  addToCart={() => addCartItem(data)}
                  removeFromCart={() => removeFromCart(data)}
                  showRemoveFromCart={showCartItems}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
