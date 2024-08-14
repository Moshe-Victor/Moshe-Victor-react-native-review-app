import * as React from 'react';
import { View, Text } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const Stack = createNativeStackNavigator(
//{
//    defaultNavigationOptions: {
//       headerTintColor: '#444',
//       headerStyle: { backgroundColor: '#eee', height: 60 }
//     }
//}
);

function HomeStack() {
  return (
//    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
                headerStyle: { backgroundColor: '#eee',
                               headerTintColor: '#444',
                               height: 60 }}}
      >
        <Stack.Screen name="Home" component={Home}
        options={{title: 'GameZone',
        //headerStyle: { backgroundColor: '#eee' }
        }}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails}
         options={{title: 'Review Details',
         //headerStyle: { backgroundColor: '#eee', height: 60 }
         }}
         />
      </Stack.Navigator>
//    </NavigationContainer>
  );
}

export default HomeStack;
