// styles.js


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
  height: '',
  width: '',
  padding: '',

};

// Texts

const Fonts = {
  fontFamily: {
    fontFamily: 'Roboto'
  },
  title: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Colors.textBlack,
    margin: Margin.small
  },
  titleWhite: {
    fontSize: FontSize.smal,
    fontWeight: 'bold',
    color: Colors.textWhite,
  },
  subTitle: {
    fontSize: FontSize.smal,
    fontWeight: 'regular',
    color: Colors.textBlack,
  },
  body: {
    color: Colors.textBlack,
  },
};

// borders

const Borders = {
  borderRadius: 8,
  borderWidth: 1,
  borderColor: Colors.borderColor,
};

// Icons

const Icons = {
  color: Colors.textWhite,
  fontSize: FontSize.big
}
const IconsTab = {
  fontSize: FontSize.big,
  color:Colors.textBlack

}


 const Container = {
    flex: 1,
    backgroundColor: Colors.background,
  }

// SCREENS -------------------------------------------------------------------------------------------------------------------------

//  CartScreen :

const CartScreenStyles = {
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    padding: Margin,
    borderBottomWidth: Borders.borderWidth,
    borderBottomColor: Colors.borderColor,
  },
}

// COMPONENTS -------------------------------------------------------------------------------------------------------------------------

// ProductCard

const ProductCardStyles = ({
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

const HeaderStyles = {
  justifyContent: 'space-around',
  flexDirection: 'row',
  backgroundColor: Colors.primary,
  padding: 15,
  alignItems: 'center',
}

const AlignCenter = {
  alignItems: 'center',
  justifyContent: 'Center',
}

// Button

const ButtonStyles = {
  buttonContainer: {
    padding: 10,
    borderRadius: Borders.borderRadius,
    alignItems: 'center',
    borderColor: Borders.borderColor,
    backgroundColor: Colors.primary,
    width:'100%',
  },
  buttonText: {
    color: Colors.textWhite,
    fontSize: FontSize.medium,
  },
}

// Modal

const ModalStyles = {
  modalContainer: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: Margin.big,
    borderRadius: Borders.borderRadius,
  },
  modalTitle: {
    fontSize: FontSize.smal,
    fontWeight: Fonts.title.fontWeight,
    marginBottom: Margin.big,
  },
}

export {
  Colors,
  FontSize, Borders,
  ProductCardStyles,
  Margin, Fonts, Icons,
  HeaderStyles, AlignCenter,
  ButtonStyles, ModalStyles, Spaces, Container, IconsTab
}
