// components/Button.js
import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { ButtonStyles } from '../Styles/styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[ButtonStyles.buttonContainer]} {...rest}>
      <Text style={ButtonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )

}


export default Button;


