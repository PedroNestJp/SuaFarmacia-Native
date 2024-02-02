// src/components/Header.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Borders, Colors, Fonts, HeaderStyles, AlignCenter, Icons } from '../Styles/styles';
import ProductCard from '../components/ProductCard';

interface HeaderProps {
  title: string;
  onSearch: (searchText: string) => void;
  navigation: any; // Certifique-se de ajustar o tipo conforme sua necessidade
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  shortDescription: string;
  longDescription: string;
}

const Header: React.FC<HeaderProps> = ({ title, onSearch, navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = () => {
    const textToSearch = searchText.trim().toUpperCase();
    // Mock de dados para simular a busca
    const products: Product[] = [
      // ... (seus produtos)
    ];
    const results = products.filter((product) =>
      product.name.toUpperCase().includes(textToSearch)
    );
    setSearchResults(results);
    onSearch(textToSearch); // Chamando a função passada por propriedade
    console.log('Pesquisando por:', textToSearch, results);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}
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
