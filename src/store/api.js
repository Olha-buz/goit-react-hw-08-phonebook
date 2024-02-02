import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(token);
}

export const clearAuthHeader = () => {
    axios.defaults.headers.common['Authorization'] = '';
}

export const signUpThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const logInThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', credentials);
        console.log(response.data);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(persistedToken);
        const response = await axios.get('/users/current');
        console.log(response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.error)
    }
});


export const fetchContactsThunk = createAsyncThunk('contacts/fetchall', async (_, thunkAPI) => {
    try {
        setAuthHeader(thunkAPI.getState().auth.token);
        const response = await axios.get('/contacts');
        console.log(response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const addContactThunk = createAsyncThunk('contacts/addcontact', async ({ name, number }, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', { name, number });
        console.log('Add contact >>', response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const deleteContactThunk = createAsyncThunk('contacts/deletecontact', async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        console.log('Delete contact >>', response.data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

