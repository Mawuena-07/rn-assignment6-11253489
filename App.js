import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './pages/Home';
import Cart from './pages/Cart';
import HomeFocus from './assets/images/Menu.png'
import HomeOutline from './assets/images/HomeOutline.png'
import CartFocus from './assets/images/CartFocus.png'
import CartOutline from './assets/images/CartOutline.png'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? HomeFocus : HomeOutline;
            } else if (route.name === 'Cart') {
              iconName = focused ? CartFocus : CartOutline;
            }
            return <Image name={iconName} style={{width: size, height: size}}  />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}