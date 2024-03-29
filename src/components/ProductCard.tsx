import React from 'react';
import { Text, StyleSheet, Pressable, Image, View } from 'react-native';
import { Borders, Fonts } from '../Styles/styles';
import Button from './Button';
import { PRODUCT, ProductProps } from '../../utils/data/products';
import { Redirect, useLocalSearchParams } from 'expo-router';

type ProductCardProps = ProductProps & {
  onPress: () => void;
  onAddToCartPress: () => void;
  productProps: () => void;
};

export default function ProductCard({ onPress, onAddToCartPress }: ProductCardProps) {

  // Use map to create an array of all products
  const allProducts = PRODUCT.map((product) => (
    <Pressable key={product.id} style={styles.card} onPress={onPress} >
      <Image source={require('../../assets/generic-photo.png')} style={styles.image} />
      <View style={styles.cardInfo}>
        <Text style={[Fonts.titleBlack, {textAlign:'center'}]}>{product.name}</Text>
        <Text style={Fonts.titleBlack}>{product.price}</Text>
        <Text>{product.shortDescription}</Text>
        <Button title="Comprar" onPress={onAddToCartPress} />
      </View>
    </Pressable>
  ));

  if (!allProducts.length) {
    return <Redirect href={'/'} />;
  }

  return allProducts;
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Borders.borderColor,
    borderRadius: 16,
    padding: 16,
    margin: 16,
    backgroundColor: 'white'
  },
  cardInfo: {
    gap:8,
    width:'100%',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'stretch',
  },
});
