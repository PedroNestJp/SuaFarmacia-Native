// src/components/Header.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Borders, Colors, Fonts, AlignCenter, Icons, HeaderStyles } from '../Styles/styles';
import ProductCard from '../components/ProductCard';
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

interface HeaderProps {
  title: string;
  navigation:any // Certifique-se de ajustar o tipo conforme sua necessidad
  onSearch: (searchText: string) => void;
}
const products: Product[] = [
  // ... your product data
];
const Header: React.FC<HeaderProps> = ({ title, onSearch, navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { cartItems, addToCart, incrementQuantity } = useCart();

  const handleSearch = () => {
    const textToSearch = searchText.trim().toUpperCase();
    // Mock de dados para simular a busca

    const results = products.filter((product) =>
      product.name.toUpperCase().includes(textToSearch)
    );
    setSearchResults(results);
    onSearch(textToSearch); // Chamando a função passada por propriedade
    console.log('Pesquisando por:', textToSearch, results);
  };

  const handleAddToCart = (item: Product) => {
    const existingItem = cartItems.find((cartItem: { id: string; }) => cartItem.id === item.id);

    if (existingItem) {
      incrementQuantity(existingItem);
    } else {
      addToCart(item);
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}
      onAddToCartPress={() => handleAddToCart(item)}
    />
  );

  const renderedResults = searchResults.length > 0 ? (
    <FlatList
      data={searchResults}
      keyExtractor={(item) => item.id}
      renderItem={renderProduct}
    />
  ) : (
    <View>
      <Text>Nenhum resultado encontrado</Text>
    </View>
  );

  return (
    <View>
      <View style={HeaderStyles}>
        <MaterialIcons name='menu' style={Icons} />
        <View style={AlignCenter}>
          <Text style={Fonts.titleWhite}>{title}</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search products"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <Pressable onPress={handleSearch}>
              <MaterialIcons name='search' style={Icons} />
            </Pressable>
          </View>
        </View>
        <MaterialIcons name='shopping-basket' style={Icons} />
      </View>
      {renderedResults}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderColor: Colors.textWhite,
    borderWidth: 1,
    borderRadius: Borders.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    borderRadius: Borders.borderRadius,
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: Colors.textWhite,
  },
});

export default Header;
