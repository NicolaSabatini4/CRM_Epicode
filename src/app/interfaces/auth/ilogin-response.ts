export interface ILoginResponse {
    accessToken: string;
    email: string;
    id: number;
    roles: string[];
    tokenType: string;
    username: string;
}
