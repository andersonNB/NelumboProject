import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'USER',
	initialState: {
		infoUser: [],
	},
	reducers: {
		setInfoUser: (state, action) => {
			state.infoUser = action.payload;
		},
	},
});

export const { setInfoUser } = userSlice.actions;
