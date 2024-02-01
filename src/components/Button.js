// components/Button.js
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Borders } from '../Styles/styles';

const Button = ({ title, onPress, color }) => {
  return (
    <Pressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: Borders.borderRadius,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
