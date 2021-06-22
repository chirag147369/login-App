import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './login';

const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
