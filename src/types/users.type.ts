export interface IUserIndentity {
    username: string;
    password: string;
}

export interface IUserInfo extends IUserIndentity {
    id: string;
    email: string;
    wallet: string;
    type: string;
}
