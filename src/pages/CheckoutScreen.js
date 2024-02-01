// CheckoutScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems, total } = route.params;

  const handlePlaceOrder = () => {
    // Lógica para realizar o pedido (simulação)
    console.log('Pedido realizado com sucesso!');
    // Limpar carrinho ou fazer outras ações necessárias
    // navigation.goBack(); // Ou outra navegação desejada
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Pedido</Text>
      {/* Mostrar itens do carrinho e informações necessárias para o checkout */}
      <Text>Total: ${total}</Text>
      <Pressable title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default CheckoutScreen;
