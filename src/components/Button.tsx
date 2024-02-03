// components/Button.js
import React from 'react';
import { Text, Pressable } from 'react-native';
import { ButtonStyles } from '../Styles/styles';

const Button = ({ color , title, onPress , disabled }:{title:any, onPress:any, color:any, disabled:any}) => {
  return (
    <Pressable style={[ButtonStyles.buttonContainer]} onPress={onPress}>
      <Text style={ButtonStyles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
