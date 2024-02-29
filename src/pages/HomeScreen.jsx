import React, { useRef, useState } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { Fonts, Margin, Colors, Borders, HomeStyles } from '../Styles/styles';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { PRODUCT, ProductProps } from '../../utils/data/products';

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { cartItems, addToCart, incrementQuantity } = useCart();
  const { id } = useLocalSearchParams();
  const router = useRouter(); // Adicionado useRouter

  const product = PRODUCT.find((product) => product.id === id);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddToCart = (productId) => {
    const item = PRODUCT.find((product) => product.id === productId);
    const existingItem = cartItems.find((cartItem) => cartItem.id === productId);

    if (existingItem) {
      incrementQuantity(existingItem);
    } else {
      addToCart(item);
    }
  };

  const handleSearch = (searchText) => {
    const results = PRODUCT.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
    console.log('Pesquisando por:', searchText, results);
  };

  //const productCardRef = useRef<renderProduct<ProductProps>>(null)

  const renderProduct = ({ item }) => (
    <Link href={`/ProductDetailsScreen/${item.id}`} asChild>
      <ProductCard
      //ref={productCardRef} 
        key={item.id}
        product={item}
        onAddToCartPress={() => handleAddToCart(item.id)}
      />
    </Link>
  );

  return (
    <View style={HomeStyles.container}>
      <Header title="SUA FARMACIA" onSearch={handleSearch} />
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={HomeStyles.modalContainer}>
          <Text style={HomeStyles.modalTitle}>This is a Modal</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(product) => product.id.toString()}
          renderItem={renderProduct}
        />
      ) : (
        <FlatList
          data={PRODUCT}
          keyExtractor={(product) => product.id.toString()}
          renderItem={renderProduct}
        />
      )}
      <Pressable
        style={HomeStyles.cartIcon}
        onPress={() => router.push('CartScreen', { cartItems })}
      >
        <Ionicons name="basket" color={Colors.textWhite} />
        <Text style={HomeStyles.cartItemCount}>{calculateTotalItems()}</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
