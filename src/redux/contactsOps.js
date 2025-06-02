import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6835a995cd78db2058c29856.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => { 
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue();
    } 
    
 });

export const deleteContact = createAsyncThunk("contact/deleteContact", async (contactId) => { 
    const res = await axios.delete(`/contacts/${contactId}`);
    return res.data;
});

export const addContact = createAsyncThunk("contact/addContact", async (newContact) => { 
    const res = await axios.post('/contacts', newContact);
    return res.data;
});