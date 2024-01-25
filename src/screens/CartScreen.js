// src/screens/CartScreen.js
import React from 'react';
import { View, FlatList, Image, Text, Button, StyleSheet } from 'react-native';
import { useCart } from '../../CartContext';

const CartScreen = ({ navigation }) => {
  const { removeFromCart, incrementQuantity, decrementQuantity, cartItems } = useCart();

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    return total.toFixed(2);
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
        <Button title="+" onPress={() => incrementQuantity(item)} />
        <Button title="-" onPress={() => decrementQuantity(item)} />
        <Button title="Remove" onPress={() => removeFromCart(item)} />
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
          <Button title="Checkout" onPress={() => { /* Implementar a funcionalidade de checkout aqui */ }} />
        </View>
      )}

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  emptyCartText: {
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {

  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  totalContainer: {
    marginVertical: 16,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default CartScreen;
