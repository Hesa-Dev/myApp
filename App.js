import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/login';

export default function App() {

  const logo = require("./assets/paypal.png")

  return (
    <View style={styles.container}>
      <Main  logo={logo}/>
      {/* <Text>hesasoft Primeira App Mobile!</Text> */}
      <StatusBar style="auto" />
    </View>
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
