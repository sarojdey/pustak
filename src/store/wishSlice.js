import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wish",
  initialState: {
    books: {},
    wishList: [],
  },
  reducers: {
    getBooks: (state, action) => {
      state.books = action.payload;
    },
    removeWishList: (state, action) => {
      const index = action.payload;
      const temp = state.wishList;
      temp.splice(index, 1);
      state.wishList = temp;
    },
    getWishList: (state, action) => {
      console.log(action.payload.bookInfo);
      const newItem = action.payload.bookInfo;
      const newItemQuantity = action.payload.quantity;
      const index = state.wishList.findIndex((p) => p.id === newItem.id);

      if (index !== -1) {
        // If item already exists, create a new array with updated quantity
        state.wishList = state.wishList.map((item, idx) =>
          idx === index
            ? {
                ...item,

                quantity: item.quantity + newItemQuantity,
              }
            : item,
        );
      } else {
        // If item does not exist, add it to the wishlist array
        state.wishList = [
          ...state.wishList,
          {
            ...newItem,
            quantity: newItemQuantity,
          },
        ];
      }
    },
  },
});

export const { getBooks, getWishList, removeWishList } = wishSlice.actions;

export default wishSlice.reducer;
