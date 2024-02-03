import React, { useState, FC } from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import { Colors, ModalStyles, Margin, Container, Icons, FontSize, Borders, ContainerCenter } from '../Styles/styles';
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
      <Header navigation={navigation} title="SUA FARMACIA" onSearch={handleSearch} />
      <View style={ContainerCenter} >
        <Button color={''} disabled={''} title="Open Modal" onPress={toggleModal} />
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View style={ModalStyles.modalContainer}>
            <Text style={ModalStyles.modalTitle}>Modal Aberto</Text>
            <Button color={''} disabled={''} title="Close" onPress={toggleModal} />
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
