import axios, { AxiosError } from "axios";


export const api = axios.create({
    // baseURL: 'http://localhost:5555',  "192.168.0.213"
    //  timeout: 10000,
    baseURL: 'http://192.168.0.213:5555',
    // headers: {
    //     Authorization: `Bearer ${cookies['@dados.token']}`,
    //     // 'Content-Type': 'application/json',
    //     // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     'Access-Control-Allow-Methods':'*',
    // },
    
})

