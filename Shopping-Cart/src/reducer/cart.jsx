export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state));
}

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = payload;
      const productInCartIndex = state.findIndex(item => item.id === id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        updateLocalStorage(newCart);
        return newCart;
      }

      const newState = [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case 'REMOVE_FROM_CART': {
      const { id } = payload;
      const newState = state.filter(item => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case 'CLEAR_CART': {
      updateLocalStorage([]);
      return [];
    }
  }

  return state
}