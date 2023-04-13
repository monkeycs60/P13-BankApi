import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userSliceProps, userSliceState } from './types';
import Cookies from 'js-cookie';

const initialState: userSliceProps = {
	email: '',
	firstName: '',
	lastName: '',
	id: '',
	createdAt: '',
	updatedAt: '',
	rememberMe: false,
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
				rememberMe: boolean;
			}>
		) => {
			state.id = action.payload.id;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.email = action.payload.email;
			state.rememberMe = action.payload.rememberMe;
		},
		resetUserInfos: (state) => {
			state.id = '';
			state.firstName = '';
			state.lastName = '';
			state.email = '';
			if (state.rememberMe === false) {
				Cookies.remove('userMail');
				state.rememberMe = false;
			} else {
				state.rememberMe = true;
			}
		},
	},
});

export const { setUserInfos, resetUserInfos } = userSlice.actions;

export default userSlice.reducer;
