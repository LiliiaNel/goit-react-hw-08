import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthHeader } from "../auth/operations";

axios.defaults.baseURL = 'https://connections-api.goit.global/';


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
export const editContact = createAsyncThunk(
  "contacts/edit",
  async ({ contactId, updatedData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setAuthHeader (`Bearer ${state.auth.token}`);
      const response = await axios.patch(`/contacts/${contactId}`, updatedData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Contact update failed");
    }
  }
);