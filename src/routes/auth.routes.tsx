
import {} from 'react-native';
import Main from '../components/login/'

import {createNativeStackNavigator}  from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 

 function AuthRoutes() {
    return (
      <Stack.Navigator >
       <Stack.Screen 
       name="Main" component={Main} 
       options={{headerShown:false}} 
       />
      </Stack.Navigator>
    );
  }

  export default AuthRoutes


