export async function getAllProduct() {
  try {
    const products = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => data.products); // Access the products array
    return products;
  } catch (err) {
    throw new Error("Something Went Wrong!");
  }
}

