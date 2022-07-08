import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Settings {
  cardsAmount: number;
}

const initialState: Settings = {
  cardsAmount: 10,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeCardsCount(state, action: PayloadAction<number>) {
      state.cardsAmount = action.payload;
    },
  },
});

export default sortSlice.reducer;
