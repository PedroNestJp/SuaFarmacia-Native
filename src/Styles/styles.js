// styles.js
 const Colors = {
    primary: '#5039EA',
    secondary: '#2ecc71',
    background: '#ecf0f1',
    textWhite: '#ffffff',
    textBlack: '#000000',
    borderColor: '#000000 solid 0.50',
  };
  const Theme = {
    primaryColor: '#5039EA',
    secondaryColor: '#333',
    textColor: '#333',
    textColorWhite: '#fff',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    accentColor: '#ff6347',
  };
  
 const FontSize = {
    smalest: 8,
    smal: 16,
    medium: 24,
    big: 32,
    bigest: 48,
  };
  
 const Fonts = {
    title: {
      fontFamily: 'Roboto',
      fontSize: FontSize.medium,
      fontWeight: 'bold',
      color: Colors.textBlack,
    },
    subTitle: {
      fontFamily: 'Roboto',
      fontSize: FontSize.smal,
      fontWeight: 'regular',
      color: Colors.textBlack,
    },
    body: {
      fontFamily: 'Roboto',
      fontSize: FontSize.smal,
      color: Colors.textBlack,
    },
  };
  
 const Borders = {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  };
  
 const Spacing = {
    margin: 16,
    padding: 16,
  };
  
 const productCard = {
    flex: 1,
    width: 150,
    height: 250,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    flexShrink: 0,
    borderRadius: Borders.borderRadius,
    border: Colors.borderColor,
    background: Colors.background,
  };



  export {Colors, FontSize, Borders, Theme, productCard, Spacing, Fonts}
  
  