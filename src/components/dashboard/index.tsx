import { View, Text , Button} from "react-native";
import styles from './styles';
import React , {
    useState,
    useContext,
    useEffect
} from 'react';
import { AuthContext } from '../../contexts/AuthContext';


export default function Dashboard(){

const { user, signOut} = useContext(AuthContext)

    return (

        <View style={styles.container}> 
            <Text style={{marginBottom:12}}> Bem Vindo {user.name} Ao Seu Painel</Text>

            <Button
             title="Logout"
             onPress={signOut}
             />
        </View>



    )
}