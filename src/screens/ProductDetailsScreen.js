import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useCart } from '../../CartContext';
import Button from '../components/Button';

export const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { cartItems, addToCart, incrementQuantity } = useCart();

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);

    if (existingItem) {
      incrementQuantity(existingItem);
    } else {
      addToCart({ ...product, quantity: 1 });
      Alert.alert('Produto Adicionado', `${product.name} foi adicionado ao carrinho.`);
    }
  };

  const comprarAgora = () => {
    console.log(`Produto ${product.name} comprado agora`);
    navigation.navigate('CartScreen', { cartItems });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/generic-photo.png')} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.shortDescription}</Text>
      <Text style={styles.description}>{product.longDescription}</Text>
      <Text>Price: {product.price}</Text>

      <View style={styles.btnsContainer}>
        <View style={styles.btnsBottom}>
          <Button
            title={isProductInCart ? 'Produto no Carrinho' : 'Adicionar ao Carrinho'}
            onPress={handleAddToCart}
            color={isProductInCart ? '#ccc' : '#007bff'}
            disabled={isProductInCart}
          />
          <Button
            title="Comprar Agora"
            onPress={comprarAgora}
            color="#4caf50"
          />
        </View>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#555" />
      </View>
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
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'center',
  },
  btnsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnsBottom: {
    flexDirection: 'column',
    gap: 8,
    justifyContent: 'space-between',
    marginVertical: 16,
  },
});

export default ProductDetailsScreen;
