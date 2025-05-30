import {create} from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success:false, message:"Please fill in all fields."};
        }
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/products`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state) => ({products:[...state.products, data.data]}));
        return {success:true, message:"Product created successfully."};
    },
    fetchProducts: async() => {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/products`, {
            method: "GET",
            credentials: 'include',
        });
        const data = await res.json();
        set({products:data.data});
    },
    deleteProducts: async(pid) => {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/products/${pid}`, {
            method: "DELETE",
            credentials: 'include',
        });
        const data = await res.json();
        console.log(data); // debug response
        if(!data.success) return {success:false, message:data.message};

        // Update UI Immediately - Without Refresh
        set((state) => ({products:state.products.filter((product) => product._id !== pid)}));
        return {success:true, message:data.message};
    },
    updateProduct: async(pid, updatedProduct) => {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/products/${pid}`, {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await res.json();
        if(!data.success) return {success:false, message:data.message};

        // Update UI Immediately - Without Refresh
        set((state) => ({products:state.products.map((product) => product._id === pid ? data.data : product)}));

        return {success:true, message:data.message};
    }
}));
