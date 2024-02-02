// src/components/ProductCard.js

import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
// import { Fonts, ProductCardStyles } from '../Styles/styles';
import Button from './Button';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    quantity: number;
    shortDescription: string;
    longDescription: string;
  };
  onAddToCartPress: () => void;
  onPress: () => void;
}

const ProductCard:React.FC<ProductCardProps> = ({ product, onPress, onAddToCartPress }) => {
  return (
    <Pressable style={ProductCardStyles.card} onPress={onPress}>
      <Image source={require('../../assets/generic-photo.png')} style={styles.image} />
      <Text style={Fonts.title}>{product.name}</Text>
      <Text>{product.shortDescription}</Text>
      <Text>{product.price}</Text>
      <Button 
        title="Comprar" 
        onPress={onAddToCartPress} 
         />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'center',
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const Fonts = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // Outras propriedades de estilo...
  },
  // Outros estilos...
});

const ProductCardStyles = StyleSheet.create ({
  card: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    margin: 8,
    padding: 8,
    width: 200,
  },
  // Outros estilos...
});

export default ProductCard;
