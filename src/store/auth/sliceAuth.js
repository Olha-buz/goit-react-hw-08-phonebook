import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, logOutThunk, refreshUser, signUpThunk } from "store/api";


const initialState = {
    token: '',
    user: null,
    isLoggedIn: false,
    error: null,
    isRefreshing: false,

};

const sliceAuth = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(signUpThunk.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoggedIn = true;
            }).addCase(signUpThunk.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(logInThunk.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoggedIn = true;
            }).addCase(logInThunk.rejected, (state, action) => {
                state.error = action.payload;
            })
            
            .addCase(logOutThunk.fulfilled, (state) => {
                state.token = null;
                state.user = { name: null, email: null };
                state.isLoggedIn = false;
            }).addCase(logOutThunk.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            });

    }
});

export const authReducers = sliceAuth.reducer;