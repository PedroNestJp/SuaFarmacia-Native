// OrderSummaryScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface OrderSummaryScreenProps {
  navigation: any;
}

const OrderSummaryScreen = ({ route, navigation } : {route:any, navigation:any}) => {
  const { cartItems, total } = route.params;

  const handleCheckout = () => {
    // Navegar para a tela de checkout com os dados necessários
    navigation.navigate('CheckoutScreen', { cartItems, total });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Pedido</Text>
      <View style={styles.orderDetails}>
        <Text>Total: ${total}</Text>
        {/* Mostrar outros detalhes do pedido conforme necessário */}
      </View>
      <Button title="Continuar para o Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  orderDetails: {
    marginBottom: 16,
  },
});

export default OrderSummaryScreen;
