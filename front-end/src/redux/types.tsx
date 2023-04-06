export type userSliceProps = {
    username: string;
    password: number;
    mail: string;
    persoInfos: {
        firstname: string;
        birthdate: string;
    };
};

export type userSliceState = {
    userSlice: userSliceProps;
};