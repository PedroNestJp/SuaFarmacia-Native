// Importe as bibliotecas necessárias
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Crie o componente ProfileScreen
const ProfileScreen = ({ navigation }) => {
  // Função para navegar para a tela de edição do perfil
  const goToEditProfile = () => {
    // Substitua 'EditProfileScreen' pelo nome real da tela de edição do perfil
    navigation.navigate('EditProfileScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      {/* Adicione mais informações do perfil conforme necessário */}
      <Text>Nome: John Doe</Text>
      <Text>Email: john.doe@example.com</Text>
      <Text>Telefone: (123) 456-7890</Text>

      {/* Botão para editar o perfil */}
      <Button
        title="Editar Perfil"
        onPress={goToEditProfile}
        color="#4caf50" // Cor verde como exemplo
      />
    </View>
  );
};

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProfileScreen;
