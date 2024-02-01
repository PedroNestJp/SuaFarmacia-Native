// src/screens/CartScreen.js
import React from 'react';
import { View, FlatList, Image, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import {Colors, FontSize, Borders, Spacing } from '../Styles/styles';

const CartScreen = () => {
  const { removeFromCart, incrementQuantity, decrementQuantity, cartItems } = useCart();
  const navigation = useNavigation();

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    return total.toFixed(2);
  };

  const handleCheckout = () => {
    // Navegar para a tela de checkout com os dados necessários
    navigation.navigate('OrderSummaryScreen', { cartItems, total: calculateTotal() });
  };

  const CartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={require('../../assets/generic-photo.png')} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>Price: {item.price}</Text>
        <View style={styles.quantityContainer}>
          <Text>Quantity: {item.quantity}</Text>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <Button title="+" onPress={() => incrementQuantity(item)}>
          <Text>+</Text>
        </Button>
        <Button title="-" onPress={() => decrementQuantity(item)}>
          <Text>-</Text>
        </Button>
        <Button title="Remove" onPress={() => removeFromCart(item)}>
          <Text>Remove</Text>
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Shopping Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CartItem item={item} />}
        />
      )}
      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
          <Pressable title="Checkout" onPress={handleCheckout} style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartTitle: {
    // fontSize: FontSize.big,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: Spacing.margin,
  },
  emptyCartText: {
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    padding: Spacing.padding,
    borderBottomWidth: Borders.borderWidth,
    borderBottomColor: Colors.borderColor,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: Borders.borderRadius,
    marginRight: Spacing.margin,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    // fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  quantityContainer: {},
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.margin,
  },
  totalContainer: {
    marginVertical: Spacing.margin,
    alignItems: 'center',
  },
  totalText: {
    // fontSize: FontSize.medium,
    marginBottom: Spacing.margin,
  },
  checkoutButton: {
    backgroundColor: Colors.primary,
    padding: Spacing.padding,
    borderRadius: Borders.borderRadius,
  },
  checkoutButtonText: {
    color: Colors.textWhite,
    fontWeight: 'bold',
  },
});

export default CartScreen;
