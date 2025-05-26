import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('/users/fetch-users', async () => {
    try {
        const response = await axios.get("http://localhost:5000/data");
        return response.data;
    } catch (err) {
        console.log(err)
    }
})

export const addUser = createAsyncThunk("/users/add-user", async (registerData) => {
    try {
        const response = await axios.post("http://localhost:5000/data/add-user", registerData);
        return response.data;
    } catch (err) {
        console.log("add users error " + err);
    }
})

export const fetchProducts = createAsyncThunk("/products/fetch-products", async () => {
    try {
        const response = await axios.get("http://localhost:5000/data/fetch-product");
        return response.data;
    } catch (err) {
        console.log(err);
    }
})

export const updateCart = createAsyncThunk("/users/update-cart", async (productValue) => {
    try {
        const response = await axios.put(`http://localhost:5000/data/update-cart/${productValue.customerId}`, { newId: productValue.cartId })
        return response.data;
    } catch (err) {
        console.log(err);
    }
})

export const updateOrders = createAsyncThunk("/users/update-orders", async (orders) => {
    try {
        const response = await axios.put(`http://localhost:5000/data/update-orders/${orders.customerId}`, { newId: orders.orderId })
        return response.data;
    } catch (err) {
        console.log(err);
    }
})

export const deleteUser = createAsyncThunk("/users/delete-user",async(deleteId) => {
    try{
        const response = await axios.delete(`http://localhost:5000/data/delete-user/${deleteId}`);
        return response.data;
    }catch(err){
        console.log(err);
    }
})

export const deleteProduct = createAsyncThunk("/users/delete-product",async(deleteId) => {
    try{
        const response = await axios.delete(`http://localhost:5000/data/delete-product/${deleteId}`);
        return response.data;
    }catch(err){
        console.log(err);
    }
})

export const addProduct = createAsyncThunk("/users/add-product",async(productData) => {
    try{
        const response = await axios.post("http://localhost:5000/data/add-product",productData);
        return response.data;
    }catch(err){
        console.log(err);
    }
})

const initialState = {
    Customer: {
        id: "1",
        Type: "",
        Email: "",
        Phone: "",
        Password: "",
        AccStatus: false,
        Cart: [],
        Orders: []
    },
    Login: {
        Email: "",
        Password: ""
    },
    AllData: [],
    ProductsData: [],
    Store: [{ unique: 1, data: [] }, { unique: 2, data: [] }, { unique: 3, data: [] }, { unique: 4, data: [] }, { unique: 5, data: [] }]
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeLogin: (state) => {
            state.Customer.Type = "",
                state.Customer.Email = "",
                state.Customer.Phone = "",
                state.Customer.Password = "",
                state.Customer.AccStatus = false,
                state.Customer.Cart = [],
                state.Customer.Orders = []
        },
        guestLogin: (state) => {
            state.Customer.Type = "guest",
                state.Customer.Email = `SN${Math.floor(Math.random() * 1000)}`,
                state.Customer.Phone = "000000",
                state.Customer.Password = "",
                state.Customer.AccStatus = true,
                state.Customer.Cart = [],
                state.Customer.Orders = []
        },
        getLoginData: (state, action) => {
            state.Login.Email = action.payload.Email,
                state.Login.Password = action.payload.Password
            action.payload.AllData.map((eachobj) => {
                if (action.payload.Email.length !== 0 && action.payload.Email.length !== 0 && eachobj.Email === action.payload.Email && eachobj.Password === action.payload.Password) {
                    state.Customer.id = eachobj._id,
                        state.Customer.Type = eachobj.Type,
                        state.Customer.Email = eachobj.Email,
                        state.Customer.Phone = eachobj.Phone,
                        state.Customer.Password = eachobj.Password,
                        state.Customer.AccStatus = true,
                        state.Customer.Cart = eachobj.Cart,
                        state.Customer.Orders = eachobj.Orders
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, () => {
                console.log("you got an error while fetching users...");
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                console.log("user fetching is success");
                state.AllData = action.payload;
            })
            .addCase(fetchUsers.rejected, () => {
                console.log("user fetching got rejected");
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.Customer.id = action.payload._id,
                    state.Customer.Type = action.payload.Type,
                    state.Customer.Email = action.payload.Email,
                    state.Customer.Phone = action.payload.Phone,
                    state.Customer.Password = action.payload.Password,
                    state.Customer.AccStatus = true,
                    state.Customer.Cart = action.payload.Cart,
                    state.Customer.Orders = action.payload.Orders
            })
            .addCase(addUser.rejected, () => {
                console.log("Failed to Add data to database");
            })
            .addCase(fetchProducts.pending, () => {
                console.log("you got an error while fetching products...");
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log("products fetching is success")
                state.ProductsData = action.payload;
                state.Store[0].data = action.payload.filter((eachobj) => {
                    return eachobj.key >= 81 && eachobj.key <= 84
                })
                state.Store[1].data = action.payload.filter((eachobj) => {
                    return eachobj.key >= 85 && eachobj.key <= 88
                })
                state.Store[2].data = action.payload.filter((eachobj) => {
                    return eachobj.key >= 89 && eachobj.key <= 92
                })
                state.Store[3].data = action.payload.filter((eachobj) => {
                    return eachobj.key >= 93 && eachobj.key <= 96
                })
                state.Store[4].data = action.payload.filter((eachobj) => {
                    return eachobj.key >= 97 && eachobj.key <= 100
                })
            })
            .addCase(fetchProducts.rejected, () => {
                console.log("products fetching got rejected");
            })
            .addCase(updateCart.pending, () => {
                console.log("you got an error while updating cart");
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                console.log("The cart is updated successfully...");
                if (action.payload && action.payload.Cart) {
                    state.Customer.Cart = action.payload.Cart;
                }
            })
            .addCase(updateOrders.pending, () => {
                console.log("you got an error while updating orders");
            })
            .addCase(updateOrders.fulfilled, (state,action) => {
                console.log("The order is updated successfully...");
                if (action.payload && action.payload.Orders) {
                    state.Customer.Orders = action.payload.Orders;
                }
            })
            .addCase(deleteUser.fulfilled,() => {
                console.log("User is deleted successfully...");
            })
            .addCase(deleteProduct.fulfilled,() => {
                console.log("Product is deleted successfully...");
            })
    }
})

export const { changeLogin, guestLogin, getLoginData } = userSlice.actions;

const Store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

export default Store;