import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {

  const logo = require("./assets/paypal.png")

  return (

    <NavigationContainer >

      <StatusBar
        backgroundColor="#3498DB"
        translucent={false}
        style="auto"
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
