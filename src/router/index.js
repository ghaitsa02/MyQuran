import {View, Text} from 'react-native';
import {Component} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Splash from '../screen/Splash';
import Home from '../screen/home';
import Isi from '../screen/isi';
import Profile from '../screen/profile';
import TopTab from '../screen/topTabNavigator';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="shoppingcart" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Isi"
          component={Isi}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="profile" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen name="TopTab" component={TopTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

//Buat Bottom/topTabs

// import {View, Text} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/AntDesign';
// import {NavigationContainer} from '@react-navigation/native';
// import User from '../screen/user';
// import Cart from '../screen/cart';
// import Profile from '../screen/profile';

// const Tab = createMaterialTopTabNavigator();

// const Stack = createNativeStackNavigator();

// const Router = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarLabelStyle: {fontSize: 12},
//           // tabBarItemStyle: {width: 100},
//           tabBarStyle: {backgroundColor: 'lightblue'},
//         }}>
//         <Stack.Screen
//           name="User"
//           component={User}
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <Icon name="user" color={color} size={size} />
//             ),
//           }}
//         />
//         <Stack.Screen
//           name="Cart"
//           component={Cart}
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <Icon name="shoppingcart" color={color} size={size} />
//             ),
//           }}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <Icon name="profile" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Router;
