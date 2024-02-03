import React, { createContext, useReducer, useContext } from 'react';

interface CartItem {
  id: any;
  quantity: number;
  // Outras propriedades do item do carrinho...
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
  incrementQuantity: (product: any) => void;
  decrementQuantity: (product: any) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: any, action: any) => {
  // Restante do seu código...
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  const removeFromCart = (product: any) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const incrementQuantity = (product: any) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
  };

  const decrementQuantity = (product: any) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
