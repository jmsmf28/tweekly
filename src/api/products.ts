/* import axios from "axios";

const fetchProductsApi = async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchProductsApi }; */

/* import products from "../mock/product_mock.json";

const fetchProductsApi = async () => {
  try {
    return products;
  } catch (error) {
    throw error;
  }
};

export { fetchProductsApi }; */

import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const fetchProductsApi = async (): Promise<Product[]> => {
  try {
    const response = await axios.get("../mock/product_mock.json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchProductsApi };
