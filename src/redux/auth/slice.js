import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: false,
    },
    extraReducers: (builder) => builder
        .addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = true;
            state.error = action.payload?.message || "Registration failed";
        })
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
        })
        .addCase(login.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = true;
        })
        .addCase(logout.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.pending, (state) => {
            state.error = null;
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
});

export default authSlice.reducer;
    
