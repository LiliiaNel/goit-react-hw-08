import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact, editContact } from "./operations";
import { logout } from "../auth/operations";


const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },

    extraReducers: (builder) => builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(contact => contact.id !== action.payload.id);
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        })
        .addCase(logout.fulfilled, (state) => {
            state.items = [];
            state.error = null;
        })
        .addCase(editContact.pending, (state) => {
            state.loading = true;
        })
        .addCase(editContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            const contact = state.items.find(contact => contact.id === action.payload.id);
            if (contact) {
            contact.name = action.payload.name;
            contact.number = action.payload.number;
            }
        })
        .addCase(editContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
          })
    
});


export default slice.reducer;

