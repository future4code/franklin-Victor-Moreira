import { USER_ROLES } from "./USER_ROLES";

export interface TokenPayload {
    id: string,
    role: USER_ROLES
}
