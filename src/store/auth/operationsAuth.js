// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     console.log(token);
// }

// export const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
// }

// // export const signUpThunk = createAsyncThunk('auth/signup', async (data, thunkAPI) => {
// //     try {
// //         console.log(data);
// //         const response = await signUp(data);
// //         console.log(response);
// //         setAuthHeader(response.token);
// //         return response;
// //     } catch (error) {
// //         return thunkAPI.rejectWithValue(error.message);
// //     }
// // });

// export const signUpThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
//     try {
//         const response = await axios.post('/users/signup', credentials);
//         setAuthHeader(response.data.token);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
// })
// // export const logInThunk = createAsyncThunk('auth/login', async (data, thunkAPI) => {
// //     try {
// //         const response = await logIn(data);
// //         setAuthHeader(response.token);
// //         return response;
// //     } catch (error) {
// //         return thunkAPI.rejectWithValue(error.message);
// //     }
// // });

// export const logInThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//     try {
//         const response = await axios.post('/users/login', credentials);
//         console.log(response.data);
//         setAuthHeader(response.data.token);
//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// })
// // export const logOutThunk = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
// //     try {
// //         const response = await logOut(data);
// //         clearAuthHeader();
// //         return response;
// //     } catch (error) {
// //         return thunkAPI.rejectWithValue(error.message);
// //     }
// // });

// export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//     try {
//         await axios.post('/users/logout');
//         clearAuthHeader();
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// })

// export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     console.log(state);
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//         return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//         setAuthHeader(persistedToken);
//         const response = await axios.get('/users/me');
//         console.log(response.data);
//         return response.data;
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.response.data.error)
//     }
// });

