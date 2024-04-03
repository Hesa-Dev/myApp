import React from 'react';
import { View, ActivityIndicator, StyleSheet } from "react-native";
// import AuthRoutes from "./painel.routes";
import AuthRoutes from './auth.routes';
import AppRoutes from './painel.routes';



export default  function Routes() {

    const isAuthenticated = false
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

