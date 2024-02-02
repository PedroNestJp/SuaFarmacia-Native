// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../services/firebase'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    //lógica de login
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      // ...
      // Após o login bem-sucedido, navegar para a tela principal do aplicativo
      navigation.navigate('Home');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Trate os erros conforme necessário
      console.error(errorCode, errorMessage);
    }
  };

  const goToRegister = () => {
    // Navegar para a tela de cadastro
    navigation.navigate('RegisterScreen');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <Pressable onPress={goToRegister}>
        <Text style={styles.registerLink}>Ainda não tem uma conta? Cadastre-se</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  registerLink: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default LoginScreen;
