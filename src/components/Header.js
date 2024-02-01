// src/components/Header.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors, FontSize, Fonts } from '../Styles/styles';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.secondary,
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: Colors.textWhite,
    fontSize: FontSize.smal,
    fontWeight: Fonts.title.fontWeight,
  },
});

export default Header;
