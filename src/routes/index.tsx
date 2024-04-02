import React from 'react';
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./app.routes";



function Routes() {

    const isAuthenticated = false
    const loading = true

    if (loading) {

        return (

            <View style={styles.container}>
                <ActivityIndicator size={60} color="#1D1D2E" />
            </View>

        )
    }
    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
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


export default Routes 