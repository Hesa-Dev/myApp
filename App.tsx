import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Main from './src/components/login';


export default function App() {

  const logo = require("./assets/paypal.png")

  return (

    <NavigationContainer>
      <StatusBar
        backgroundColor="#3498DB"
        // barStyle="light-content"
        translucent={false} 
      />
      <Routes />
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Main  logo={logo}/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CACFD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
