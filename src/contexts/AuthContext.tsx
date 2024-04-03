import React, { useState, createContext, ReactNode } from 'react';
import { api } from '../services/api';

type AuthData = {

    user: UserProps,
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>
}

type UserProps = {

    id: string,
    email: string,
    name: string,
    token: string
}

type AuthProviderProps = {
    children: ReactNode
}

type SignInProps = {
    email: string
    password: string;
}


export const AuthContext = createContext({} as AuthData)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({
        id: "",
        email: "",
        name: "",
        token: ""
    }

    )
    // !! --> permite converter uma variavel em booleano | Se variavel for nulo ou vazio (false) caso contrário (true) 
    const isAuthenticated = !!user.id;


    async function signIn({ email, password }: SignInProps) {

        try {

            const response = api.post('/session', {
                email,
                password
            }).then(function (resp) {

                console.log(resp.data)
            })
        } catch (error) {

            console.log(error)
        }
    }



    return (

        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}