import { RootState } from './index';
import { IUser } from '../models/IUser';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface UserState {
	user: IUser;
	status: string | null;
	error: string | unknown;
}

const initialState: UserState = {
	user: {},
	status: '',
	error: null,
}

export const fetchUserById = createAsyncThunk<IUser, number | null>(
    'user/fetchUserById',
    async function(id, {rejectWithValue}) {

        try {
            const response = await fetch(`https://reqres.in/api/users/${id}`);
            
            if (!response.ok) {
                throw new Error('Server Error!');
            }
    
            const userData = await response.json();
			const userInfo = userData.data

			return userInfo;

        } catch (error) {
            if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
		getUser(state, action) {
			state.user = action.payload;
        },

	},
	extraReducers: {
		[fetchUserById.pending.type]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUserById.fulfilled.type]: (state, action) => {
            state.status = 'resolved';
            state.user = action.payload;
        },
        [fetchUserById.rejected.type]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export const {getUser} = userSlice.actions;

export const selectUserInfo = (state: RootState) => state?.user?.user;

export default userSlice.reducer;