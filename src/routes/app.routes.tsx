
import {} from 'react-native';
import Dashboard from '../components/dashboard/'

import {createNativeStackNavigator}  from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 

export default function AppRoutes() {
    return (
      <Stack.Navigator>
       <Stack.Screen name="Dashboard"  options={{headerShown:false}} component={Dashboard} />
      </Stack.Navigator>
    );
  }


