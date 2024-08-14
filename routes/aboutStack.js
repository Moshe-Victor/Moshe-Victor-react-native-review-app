import * as React from 'react';
import { View, Text } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
//    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
                headerStyle: { backgroundColor: '#eee',
                               headerTintColor: '#444',
                               height: 60 }}}
      >
        <Stack.Screen name="About" component={About}
        options={{
        //title: 'About GameZone',
        //headerStyle: { backgroundColor: '#eee' }
        headerTitle: () => <Header title="About GameZone" />,
        }}
        />
      </Stack.Navigator>
//    </NavigationContainer>
  );
}

export default AboutStack;
