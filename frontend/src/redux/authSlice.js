import { createSlice } from "@reduxjs/toolkit"
import { userLogin, userRegister } from "./authAction"

const authSlice = createSlice({
    name: "auth",
    initialState: { users: [] },
    reducers: {},

    extraReducers: (builder) => (
        builder
            .addCase(userLogin.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.islogin = true
                state.login = {
                    name: payload.name,
                    email: payload.email,
                    token: payload.token
                }
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.authError = payload
            })
            .addCase(userRegister.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userRegister.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isRegister = true
            })
            .addCase(userRegister.rejected, (state, { payload }) => {
                state.loading = false
                state.registerError = payload
            })
    )
}
)

export default authSlice.reducer