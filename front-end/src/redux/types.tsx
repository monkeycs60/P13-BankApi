export type userSliceProps = {
	email: string;
	firstName: string;
	lastName: string;
	id: string;
	createdAt: string;
	updatedAt: string;
};

export type userSliceState = {
	userDatas: userSliceProps;
	userApiSlice: any;
};
