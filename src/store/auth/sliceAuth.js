const { createSlice } = require("@reduxjs/toolkit");
const { signUpThunk, logInThunk, logOutThunk } = require("./thunksAuth");

const initialState = {
    token: '',
    user: null,
    isLoggedIn: false,
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
            })
            .addCase(logInThunk.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoggedIn = true;
            })
            .addCase(logOutThunk.fulfilled, (state, action) => {
                state.token = '';
                state.user = null;
                state.isLoggedIn = false;

            })
    }
});

export const authReducers = sliceAuth.reducer;