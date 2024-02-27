// src/components/Header.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Borders, Colors, Fonts, HeaderStyles, AlignCenter, Icons } from '../Styles/styles';
import { FlatList } from 'react-native';
import ProductCard from './ProductCard';
import { PRODUCT, ProductProps } from '../../utils/data/products'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);

  // Func Search Products 
  const handleSearch = () => {
    const textToSearch = searchText.trim().toUpperCase();
    const results = PRODUCT.filter((product) =>
      product.name.toUpperCase().includes(textToSearch)
    );
    setSearchResults(results);
    console.log('Pesquisando por:', textToSearch, results);
  };

  // Func Render Products
  const renderProduct = (product: any) => (
    <ProductCard
      onAddToCartPress={() => { }}
      productProp={product}
      onPress={() => { }}
      id={''}
      name={''}
      price={''}
      image={''}
      quantity={0}
      shortDescription={''}
      longDescription={''}
      key={product}
    />
  );

  const renderedResults = searchResults.length > 0 ? (
    <FlatList
      data={searchResults}
      keyExtractor={(product) => product.id}
      renderItem={renderProduct}
    />

  ) : (
    []
  );

  return (

    <View>
      <View style={HeaderStyles.Header}>
        <Text style={[Fonts.titleWhite, {textAlign:'center'} ]}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'space-between', justifyContent: 'space-between' }}>
          <MaterialIcons name='menu' style={[Fonts.titleWhite, {fontSize:35}]} />
          <View style={HeaderStyles.searchContainer}>
            <TextInput
              style={HeaderStyles.searchInput}
              placeholder="Search products"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}>
            </TextInput>
            <Pressable onPress={handleSearch}>
              <MaterialIcons name='search' style={Fonts.titleWhite} />
            </Pressable>
          </View>
          <MaterialIcons name='shopping-basket' style={[Fonts.titleWhite,{fontSize:35}]} />
        </View>
      </View>
      {renderedResults}
    </View>
  );
};


export default Header;