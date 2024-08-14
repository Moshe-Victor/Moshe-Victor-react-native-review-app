import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        screenOptions={{
                headerStyle: { backgroundColor: '#eee',
                               headerTintColor: '#444',
                               height: 60 }}}
      >
        <Stack.Screen name="Home" component={Home}
        options={{
        //title: 'GameZone',
        //headerStyle: { backgroundColor: '#eee' }
        headerTitle: () => <Header title="GameZone" />,
        }}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails}
         options={{title: 'Review Details',
         //headerStyle: { backgroundColor: '#eee', height: 60 }
         }}
         />
      </Stack.Navigator>
  );
}

export default HomeStack;
