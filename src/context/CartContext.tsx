import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface CartItem {
  id: string;
  quantity: number;
  price: any;
  // Outras propriedades do item do carrinho...
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
  incrementQuantity: (product: any) => void;
  decrementQuantity: (product: any) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Adicione um tipo para as ações do reducer
type CartAction =
  | { type: 'ADD_TO_CART'; payload: any }
  | { type: 'REMOVE_FROM_CART'; payload: any }
  | { type: 'INCREMENT_QUANTITY'; payload: any }
  | { type: 'DECREMENT_QUANTITY'; payload: any };

const cartReducer = (state: { cartItems: CartItem[] }, action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
    case 'REMOVE_FROM_CART':
      return { cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };
    case 'INCREMENT_QUANTITY':
      return {
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    default:
      return state;
  }
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
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
