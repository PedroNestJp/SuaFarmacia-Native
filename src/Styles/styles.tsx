// styles.js
import { StyleSheet } from "react-native";

// colors
const Colors = {
  primary: '#5039EA',
  secondary: '#2ecc71',
  background: '#ecf0f1',
  textWhite: '#ffffff',
  textBlack: '#000000',
  borderColor: '#ddd',
  accentColor: '#ff6347',
};


// Sizes

const FontSize = {
  smalest: 5,
  smal: 8,
  medium: 16,
  big: 24,
  bigest: 32,
};

const Margin = {
  smalest: 5,
  small: 8,
  medium: 16,
  big: 24,
  bigest: 32,
};

const Spaces = {
  height: 16,
  width: 16,
  padding: 16,

};

const AlignCenter = StyleSheet.create({
  Center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

// Texts

const Fonts = StyleSheet.create({
  fontFamily: {
    fontFamily: 'Roboto'
  },
  titleBlack: {
    fontSize: FontSize.big,
    fontWeight: 'bold',
    color: Colors.textBlack,
    margin: Margin.small
  },
  titleWhite: {
    fontSize: FontSize.big,
    fontWeight: 'bold',
    color: Colors.textWhite,
    margin: Margin.small
    
  },
  subTitle: {
    fontSize: FontSize.medium,
    fontWeight: "800",
    color: Colors.textBlack,
  },
  body: {
    color: Colors.textBlack,
  },
})

// borders

const Borders = {
  borderRadius: 16,
  borderWidth: 1,
  borderColor: Colors.borderColor,
}

// Icons

const Icons = {
  fontSize: FontSize.big,
  color: Colors.textWhite,
}
const IconsTab = {
  fontSize: FontSize.big,
  color: Colors.textBlack
}

const Container = {
  flex: 1,
  backgroundColor: Colors.background,
}
const ContainerCenter = {
  flex: 1,
  backgroundColor: Colors.background,
  alignItems: 'center',
}

// SCREENS -------------------------------------------------------------------------------------------------------------------------

//  CartScreen :

const CartScreenStyles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    padding: Margin.medium,
    borderBottomWidth: Borders.borderWidth,
    borderBottomColor: Colors.borderColor,
  },
})

// HomeScreen : 

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  modalContainer: {
    backgroundColor: Colors.background,
    padding: Margin.medium,
    borderRadius: Borders.borderRadius,
  },
  modalTitle: {

    marginBottom: Margin.medium,
  },
});

// COMPONENTS -------------------------------------------------------------------------------------------------------------------------

// ProductCard

const ProductCardStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    margin: 8,
    padding: 8,
    width: 200,
  },
  // Outros estilos...
});

// Header :

const HeaderStyles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.primary,
    padding: 15,
  },
  searchContainer: {
    borderColor: Colors.textWhite,
    borderWidth: 1,
    borderRadius: Borders.borderRadius,
    flexDirection: 'row',
  },
  searchInput: {
    borderRadius: Borders.borderRadius,
    height: 40,
    paddingRight:40,
    paddingLeft:10,
    backgroundColor: Colors.textWhite,
  },
})



// Button

const ButtonStyles = StyleSheet.create({
  buttonContainer: {
    padding: 8,
    borderRadius: Borders.borderRadius,
    alignItems: 'center',
    borderColor: Borders.borderColor,
    backgroundColor: Colors.primary,
    width: '100%',
  },

  buttonText: {
    color: Colors.textWhite,
    fontSize: FontSize.medium,
  },
})

// Modal

const ModalStyles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: Margin.big,
    borderRadius: Borders.borderRadius,
  },
  modalTitle: {
    fontSize: FontSize.smal,
    fontWeight: Fonts.titleWhite.fontWeight,
    marginBottom: Margin.big,
  },
})

export {
  Colors,
  FontSize, Borders,
  ProductCardStyles,
  Margin, Fonts, Icons,
  HeaderStyles, AlignCenter,
  ButtonStyles, ModalStyles, Spaces,
  Container, IconsTab, ContainerCenter,
  CartScreenStyles, HomeStyles
}
