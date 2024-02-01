import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../pages/HomeScreen';
import { ProductDetailsScreen } from '../pages/ProductDetailsScreen';
import CartScreen from '../pages/CartScreen';
import CheckoutScreen from '../pages/CheckoutScreen';
import RegisterScreen from '../pages/RegisterScreen';
import LoginScreen from '../pages/LoginScreen';
import ProfileScreen from '../pages/ProfileScreen';
import OrderSummaryScreen from '../pages/OrderSummaryScreen';

import { CartProvider, useCart } from '../context/CartContext';
import { Colors } from '../Styles/styles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { cartItems } = useCart();
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={size} />
          ),
          tabBarBadge: cartItems.length > 0 ? calculateTotalItems() : null,
          tabBarBadgeStyle: {
            backgroundColor: Colors.secondary,
            color:Colors.textWhite,
            margin:2
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const AppRoutes = () => {
    return (
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainNavigator} />
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
            <Stack.Screen name="OrderSummaryScreen" component={OrderSummaryScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            {/* Adicione mais telas conforme necessário */}
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    );
  };
  
  export default AppRoutes;