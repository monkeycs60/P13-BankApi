import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userSliceProps, userSliceState } from './types';

const initialState: userSliceProps = {
	email: '',
	firstName: '',
	lastName: '',
	id: '',
	createdAt: '',
	updatedAt: '',
};

export const userSlice = createSlice({
	name: 'userDatas',
	initialState: initialState,
	reducers: {
		setUserInfos: (
			state,
			action: PayloadAction<{
				id: string;
				firstName: string;
				lastName: string;
				email: string;
			}>
		) => {
			state.id = action.payload.id;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.email = action.payload.email;
		},
		resetUserInfos: (state) => initialState,
	},
});

export const { setUserInfos, resetUserInfos } = userSlice.actions;

export default userSlice.reducer;
