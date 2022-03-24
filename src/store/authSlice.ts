import { RootState } from './index';
import { createSlice } from "@reduxjs/toolkit"

interface userAuthState {
	isLoggedIn: boolean;
	email: string;
	id: number | null;
}

const initialState: userAuthState = {
	isLoggedIn: false,
	email: '',
	id: null
}

const authSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		setSignIn(state, action) {
			state.email = action.payload.email;
			state.isLoggedIn = action.payload.isLoggedIn;
			state.id = action.payload.id;

		},
		setSignOut(state) {
			state.email = '';
			state.id = null;
			state.isLoggedIn = false;
		}
	}
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.userAuth.isLoggedIn;

export const selectUserAuth = (state: RootState) => state?.userAuth;

export default authSlice.reducer;