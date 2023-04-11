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
		setNames: (state, action: PayloadAction<string>) => {
			state.firstName = action.payload;
      state.lastName = action.payload;
		},
		setUserDatas: (state, action: PayloadAction<userSliceProps>) => {
			state.firstName = action.payload.firstName;
		},
	},
});

export const { setNames, setUserDatas } = userSlice.actions;

export default userSlice.reducer;
