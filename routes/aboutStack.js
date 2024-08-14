import * as React from 'react';
import { View, Text } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';

const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
//    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
                headerStyle: { backgroundColor: '#eee',
                               headerTintColor: '#444',
                               height: 60 }}}
      >
        <Stack.Screen name="About" component={About}
        options={{title: 'About GameZone',
        //headerStyle: { backgroundColor: '#eee' }
        }}
        />
      </Stack.Navigator>
//    </NavigationContainer>
  );
}

export default AboutStack;
