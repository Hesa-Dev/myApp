import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { api } from '../services/api';
import AsyncStorage
    from '@react-native-async-storage/async-storage';

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

    useEffect(() => {

        async function getInfoUser() {
            const userInfo = await AsyncStorage.getItem("@minhafinanca")
            let hasUser: UserProps = JSON.parse(userInfo || '{}')

            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`
                setUser({
                    id: hasUser.id,
                    name:hasUser.name,
                    email:hasUser.email,
                    token:hasUser.token
                })
            }

        }

        getInfoUser()

    }, [])



    async function signIn({ email, password }: SignInProps) {

        try {

            const response = await api.post('/session', {
                email,
                password
            })

            console.log(response.data)

            const { id, name, token } = response.data

            const dados = {
                ...response.data
            }
            await AsyncStorage.setItem('@minhafinanca', JSON.stringify(dados))
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setUser({
                id,
                name,
                email,
                token
            })

            // then(function async (resp) {


            //     const {id , name , email, token} = resp.data

            //     const data = {
            //         ...resp.data
            //     }

            //     await AsyncStorage.setItem('@minhafinanca', JSON.stringify(data))

            //     setUser({
            //         id,
            //         name,
            //         email,
            //         token
            //     })

            //     console.log(resp.data)
            // })
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