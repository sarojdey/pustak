import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    subtotal: 0,
  },

  reducers: {
    removeCart: (state, action) => {
      const index = action.payload;
      const removedItem = state.cart[index];
      const tempSub = state.subtotal - removedItem.price * removedItem.quantity;
      state.subtotal = tempSub;
      state.cart.splice(index, 1);
    },
    getCart: (state, action) => {
      const newItem = action.payload.bookInfo;
      const newItemQuantity = action.payload.quantity;
      const index = state.cart.findIndex((p) => p.id === newItem.id);

      if (index !== -1) {
        // If item already exists, create a new array with updated quantity
        state.cart = state.cart.map((item, idx) =>
          idx === index
            ? {
                ...item,
                quantity: item.quantity + newItemQuantity,
              }
            : item,
        );
      } else {
        // If item does not exist, add it to the cart array
        state.cart = [
          ...state.cart,
          {
            ...newItem,
            quantity: newItemQuantity,
          },
        ];
      }
      const tempSub = state.subtotal + newItemQuantity * newItem.price;
      state.subtotal = tempSub;
    },
  },
});

export const { getCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
