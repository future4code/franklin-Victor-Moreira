import { USER_ROLES } from "./USER_ROLES";

export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}