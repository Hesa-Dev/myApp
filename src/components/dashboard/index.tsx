import { View, Text } from "react-native";
import styles from './styles';
import React , {
    useState,
    useContext,
    useEffect
} from 'react';
import { AuthContext } from '../../contexts/AuthContext';


export default function Dashboard(){

const { user} = useContext(AuthContext)

    return (

        <View style={styles.container}> 
            <Text> Bem Vindo {user.name} Ao Seu Painel</Text>
        </View>
    )
}