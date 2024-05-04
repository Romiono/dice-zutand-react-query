import {create} from "zustand";
import {IUser} from "../types/IUser.ts";

interface IUsers {
    username: string | null,
    mail: string | null,
    token: string | null,
    role: string | null,
    isAuth: boolean,
}

interface IActions {
    login: (user: IUser) => void
}

export const useUserStore = create<IUsers & IActions>()((set) => ({
    username: null,
    mail: null,
    token: null,
    role: null,
    isAuth: false,
    login: (user: IUser) => (set(() => ({
        isAuth: true,
        username: user.username,
        mail: user.mail,
        token: user.token,
        role: user.role,
    }))),
    mockLogin: () => (set((state) => ({
        isAuth: !state.isAuth,
    }))),
}));