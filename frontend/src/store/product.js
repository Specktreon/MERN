import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    const token = localStorage.getItem("token");

    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully." };
  },

  // fetchProducts: async () => {
  //   const res = await fetch("/api/products");
  //   const data = await res.json();
  //   set({ products: data.data });
  // },

  fetchProducts: async () => {
    const token = localStorage.getItem("authToken");

    try {
      const res = await axios.get("/api/products", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Add Bearer prefix
        },
      });

      set({ products: res.data.data });
    } catch (err) {
      console.error(err.response?.data?.message || "Fetch products error");
    }
  },

  deleteProduct: async (pid) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: data.message };
  },

  updateProduct: async (pid, updatedProduct) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));

    return { success: true, message: data.message };
  },
}));
