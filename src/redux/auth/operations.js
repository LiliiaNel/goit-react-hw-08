import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = (value) => {
    axios.defaults.headers.Authorization = value;
  };

export const register = createAsyncThunk("auth/register", async (newUser) => { 
    const response = await axios.post("/users/signup", newUser);
    setAuthHeader (`Bearer ${response.data.token}`);
    return response.data;
 });

 export const login = createAsyncThunk("auth/login", async (registredUser) => { 
    const response = await axios.post("/users/login", registredUser);
    setAuthHeader (`Bearer ${response.data.token}`);
    return response.data;
 });

 export const logout = createAsyncThunk("auth/logout", async () => { 
    const response = await axios.post("/users/logout",);
    setAuthHeader ("");
    return response.data;
    
 });

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(`Bearer ${reduxState.auth.token}`);
    const response = await axios.get("/users/current");
    return response.data;
    
},
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        }
    },
 );


