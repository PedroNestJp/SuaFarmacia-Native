
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { ProductDetailsScreen } from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { CartProvider, useCart } from './CartContext';
import LoginScreen from './src/screens/LoginScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from './src/Theme';
import OrderSummaryScreen from './src/screens/OrderSummaryScreen';
import RegisterScreen from './src/screens/RegisterScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const {cartItems} = useCart()
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
            backgroundColor: '#4CAF50',
            color:theme.textColorWhite,
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
    </Tab.Navigator>
  );
};

const App = () => {
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

export default App;
