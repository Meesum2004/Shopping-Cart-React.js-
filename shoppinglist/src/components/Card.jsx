import { useState } from "react";

function Card({ item, addToCart, isAddedToCart, showRemoveFromCart, removeFromCart }) {
  const { category, thumbnail, description, title, price } = item;
  const [showModal, setShowModal] = useState(false); // State for showing modal

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {thumbnail ? (
          <>
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
              src={thumbnail}
              alt="product image"
              onClick={() => setShowModal(true)} // Open modal on click
            />
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                {/* Background with gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"
                ></div>

                <div className="relative p-6 bg-white shadow-2xl rounded-lg max-w-3xl w-full">
                  <img
                    className="w-full h-auto max-h-[80vh] object-cover rounded-md shadow-lg border-4 border-indigo-300"
                    src={thumbnail}
                    alt="product larger view"
                  />
                  <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-red-600"
                    onClick={() => setShowModal(false)} // Close modal on button click
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>No Image Available</p>
        )}
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category || "No Category"}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title || "No Title"}
          </h1>
          <p className="leading-relaxed mb-3">
            {description || "No Description Available"}
          </p>
          <div className="flex items-center justify-between space-x-4">
            <button
              onClick={addToCart}
              className={`${
                isAddedToCart
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600"
              } text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out`}
              disabled={isAddedToCart}
            >
              {isAddedToCart ? "Added to Cart" : "Add to Cart"}
              <svg
                className="w-4 h-4 ml-2 inline-block"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>

            {showRemoveFromCart && (
              <button
                onClick={removeFromCart}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              >
                Remove From Cart
                <svg
                  className="w-4 h-4 ml-2 inline-block"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
