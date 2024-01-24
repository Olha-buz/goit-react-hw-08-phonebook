import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, logOutThunk, signUpThunk } from "./thunksAuth";


const initialState = {
    token: '',
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

const sliceAuth = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUpThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(signUpThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(signUpThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(logInThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(logInThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(logInThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            
            .addCase(logOutThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(logOutThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = '';
                state.user = null;
                state.isLoggedIn = false;
                state.error = null;
            })
            .addCase(logOutThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const authReducers = sliceAuth.reducer;