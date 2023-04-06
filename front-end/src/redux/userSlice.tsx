import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userSliceProps, userSliceState } from './types';

const initialState: userSliceProps = {
  username: 'Thierry',
  password: 123456,
  mail: '',
  persoInfos: {
    firstname: 'michel',
    birthdate: '01/01/2000',
  },
};

export const userSlice = createSlice({
  name: 'userDatas',
  initialState: initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setUserDatas: (state, action: PayloadAction<userSliceProps>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.mail = action.payload.mail;
    },
  },
});

export const { setUsername, setUserDatas } = userSlice.actions;

export default userSlice.reducer;
