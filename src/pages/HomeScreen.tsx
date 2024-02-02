import React, { useState, FC } from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import { Colors, ModalStyles, Margin, Container, Icons } from '../Styles/styles';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  shortDescription: string;
  longDescription: string;
}

interface HomeScreenProps {
  navigation: any;
}

const products: Product[] = [
  // ... your product data
];



const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { cartItems, addToCart, incrementQuantity } = useCart();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total:number, item:{quantity:number}) => total + (item.quantity || 0), 0);
  };

  const handleAddToCart = (item: Product) => {
    const existingItem = cartItems.find((cartItem: { id: string; }) => cartItem.id === item.id);

    if (existingItem) {
      incrementQuantity(existingItem);
    } else {
      addToCart(item);
    }
  };

  const handleSearch = (searchText: string) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
    console.log('Pesquisando por:', searchText, results);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}
      onAddToCartPress={() => handleAddToCart(item)}
    />
  );

 
  return (
    <View style={Container}>
      <Header title="SUA FARMACIA" onSearch={handleSearch} />
      <View style={styles.contentContainer}>
        <Button title="Open Modal" onPress={toggleModal} />
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View style={ModalStyles.modalContainer}>
            <Text style={ModalStyles.modalTitle}>Modal Aberto</Text>
            <Button title="Close" onPress={toggleModal} />
          </View>
        </Modal>
        {searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={renderProduct}
          />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderProduct}
          />
        )}
        <Pressable
          style={styles.cartIcon}
          onPress={() => navigation.navigate('CartScreen', { cartItems })}
        >
          <Ionicons name='basket' style={Icons} />
          <Text style={styles.cartItemCount}>{calculateTotalItems()}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cartIcon: {
    position: 'absolute',
    bottom: Margin.medium,
    right: Margin.medium,
    backgroundColor: Colors.secondary,
    padding: Margin.medium,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemCount: {
    color: Colors.background,
    marginLeft: Margin.medium,
  },
});

export default HomeScreen;
