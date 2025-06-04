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

 export const deleteContact = createAsyncThunk(
    "contacts/delete",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Something went wrong");
      }
    }
  );

export const addContact = createAsyncThunk(
    "contacts/add",
    async (newContact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", newContact);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Something went wrong");
      }
    }
  );