// src/components/Header.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Borders, Colors, Fonts, HeaderStyles, AlignCenter, Icons } from '../Styles/styles';
import { FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Paracetamol',
    price: '$5.99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: 'Paracetamol 750mg Genérico EMS 20 Comprimidos',
    longDescription: 'O Paracetamol reduz a febre atuando no centro regulador da temperatura no Sistema Nervoso Central (SNC) e diminui a sensibilidade para a dor. É indicado para a redução da febre e para o alívio temporário de dores leves a moderadas.'
  },
  {
    id: '2',
    name: 'Ibuprofeno',
    price: '$7.99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: 'Ibuprofeno 600mg Genérico Prati Donaduzzi 20 Comprimidos',
    longDescription: 'Indicado para alívio e tratamento dos sintomas de doenças nos ossos, o Ibuprofeno atualmente é o melhor medicamento analgésico e anti-inflamatório existente no mercado.A propriedade analgésica e antiinflamatória do ibuprofeno reduz e auxilia no tratamento dos sintomas da osteoartrite, artrite reumatoide e espondilite, dores pós-operatórias de cirurgia ortopédica.Este medicamento para dor também ajuda a reduzir dores e inflamações causadas pelas reações naturais do corpo humano, além de auxiliar no tratamento da febre. O ibuprofeno 600mg genérico Prati Donaduzzi 20 comprimidos é contraindicado para indivíduos que possuam hipersensibilidade a qualquer um dos seus componentes.'
  },
  {
    id: '3',
    name: 'Nimesulida',
    price: '$9.99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: 'Nimesulida 100mg Genérico Eurofarma 12 Comprimidos',
    longDescription: 'Nimesulida 100mg Genérico Eurofarma 12 Comprimidos é um anti-inflamatório que apresenta propriedades que combatem a dor de dente, dor de garganta, e a febre, e sua atividade anti-inflamatória envolve vários mecanismos. A Nimesulida inibe uma enzima chamada cicloxigenase, a qual está relacionada a produção de uma substância chamada prostaglandina, tal inibição faz com que a dor e a inflamação diminuam. O tempo médio estimado para início da ação depois que você tomar nimesulida é de 15 minutos para alívio da dor. A resposta inicial para a febre acontece cerca de 1 a 2 horas após o uso do medicamento e dura aproximadamente 6 horas.'
  },
  {
    id: '4',
    name: 'Dipirona',
    price: '$9,99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: "Dipirona 1g Genérico Prati-Dunaduzzi 10 Comprimidos",
    longDescription: 'Dipirona 1g Genérico Prati-Dunaduzzi 10 Comprimidos é um medicamento utilizado no tratamento da dor e febre. Os efeitos analgésico e antitérmico podem ser esperados em 30 a 60 minutos após a administração e geralmente persistem por aproximadamente 4 horas. Este medicamento é contraindicado para menores de 3 meses de idade ou pesando menos de 5 kg. Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista. Informe imediatamente seu médico em caso de suspeita de gravidez.'
  },
  // Adicione mais produtos conforme necessário
];

const Header = ({ title, onSearch, navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const textToSearch = searchText.trim().toUpperCase();
    const results = products.filter((product) =>
      product.name.toUpperCase().includes(textToSearch)
    );
    setSearchResults(results);
    console.log('Pesquisando por:', textToSearch, results);
  };

  const renderProduct = ({ item }) => (
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
        <MaterialIcons name='menu' style={Fonts.titleWhite} />
        <View style={AlignCenter}>
          <Text style={Fonts.titleWhite}>{title}</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search products"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}>
            </TextInput>
            <Pressable onPress={handleSearch}>
              <MaterialIcons name='search' style={Fonts.titleWhite} />
            </Pressable>
          </View>
        </View>
        <MaterialIcons name='shopping-basket' style={Fonts.titleWhite} />
      </View>
      {renderedResults}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderColor: Colors.textWhite,
    borderWidth: 1,
    borderRadius:Borders.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    borderRadius:Borders.borderRadius,
    height: 30,
    paddingHorizontal: 10,
    backgroundColor:Colors.textWhite,
  },
});

export default Header;
