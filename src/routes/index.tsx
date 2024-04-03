import React , {useContext} from 'react';
import { View, ActivityIndicator, StyleSheet } from "react-native";
// import AuthRoutes from "./painel.routes";
import AuthRoutes from './auth.routes';
import AppRoutes from './painel.routes';
import { AuthContext } from '../contexts/AuthContext';



export default  function Routes() {

    const { isAuthenticated} = useContext(AuthContext)

    const loading = false

    if (loading) {

        return (

            <View style={styles.container}>
                <ActivityIndicator size={60} color="#1D1D2E" />
            </View>

        )
    }
    return (

        isAuthenticated? <AppRoutes/> :   <AuthRoutes />
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CACFD2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

