import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Curriculo from './curriculo';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Curriculo" component={Curriculo} options={{ title: 'Currículo' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}