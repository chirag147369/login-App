import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import LoginComponent from './login';
import HomeComponent from './home';
import ProfileComponent from './profile';
import NotificationComponent from './notifications';
import SettingComponent from './setting';

// const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const SettingStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icons name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icons name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icons name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingStackScreen}
      options={{
        tabBarLabel: 'Setting',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icons name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

// const LoginStackScreen = ({navigation}) => {
//   return (
//     <LoginStack.Navigator>
//       <LoginStack.Screen name="Login" component={LoginComponent} />
//     </LoginStack.Navigator>
//   );
// };

const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          headerLeft: () => (
            <Icons.Button
              name="ios-menu"
              size={40}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icons.Button>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};
const NotificationStackScreen = ({navigation}) => {
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <NotificationStack.Screen
        name="Notification"
        component={NotificationComponent}
        options={{
          headerLeft: () => (
            <Icons.Button
              name="ios-menu"
              size={40}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icons.Button>
          ),
        }}
      />
    </NotificationStack.Navigator>
  );
};
const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeComponent}
        options={{
          headerLeft: () => (
            <Icons.Button
              name="ios-menu"
              size={40}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icons.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
const SettingStackScreen = ({navigation}) => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SettingStack.Screen
        name="Setting"
        component={SettingComponent}
        options={{
          headerLeft: () => (
            <Icons.Button
              name="ios-menu"
              size={50}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icons.Button>
          ),
        }}
      />
    </SettingStack.Navigator>
  );
};
