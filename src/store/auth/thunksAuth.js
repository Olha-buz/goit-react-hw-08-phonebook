import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, logIn, logOut, setAuthHeader, signUp } from "api/auth";

export const signUpThunk = createAsyncThunk('auth/signup', async (data, thunkAPI) => {
    try {
        const response = await signUp(data);
        setAuthHeader(response.token);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logInThunk = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await logIn(data);
        setAuthHeader(response.token);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOutThunk = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
    try {
        const response = await logOut(data);
        clearAuthHeader();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//     try {
//         return await setAuthHeader(thunkAPI.getStat().auth.token)
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.response.data.error)
//     }
// });

