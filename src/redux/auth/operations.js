import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => { 
    try {
        const response = await axios.post("/users/signup", newUser);
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue();
    } 
    
 });

 export const login = createAsyncThunk("auth/login", async (registredUser, thunkAPI) => { 
    try {
        const response = await axios.post("/users/login", registredUser);
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue();
    } 
    
 });

 export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => { 
    try {
        const response = await axios.post("/users/logout", );
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue();
    } 
    
 });


 export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => { 
    try {
        const response = await axios.get("/users/current");
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue();
    } 
    
 });


