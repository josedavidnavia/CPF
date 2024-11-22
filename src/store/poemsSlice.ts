import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Poem {
  id: string;
  title: string;
  excerpt: string;
  author?: string;
  lines?: string[];
  linecount?: string;
}

interface PoemsState {
  poems: Poem[];
  loading: boolean;
  error: string | null;
}

const initialState: PoemsState = {
  poems: [],
  loading: false,
  error: null,
};

const poemsSlice = createSlice({
  name: "poems",
  initialState,
  reducers: {
    fetchPoemsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPoemsSuccess(state, action: PayloadAction<Poem[]>) {
      state.loading = false;
      state.poems = action.payload;
    },
    fetchPoemsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addPoem(state, action: PayloadAction<Poem>) {
      state.poems.push(action.payload);
    },
    deletePoem(state, action: PayloadAction<string>) {
      state.poems = state.poems.filter((poem) => poem.id !== action.payload);
    },
  },
});

export const {
  fetchPoemsStart,
  fetchPoemsSuccess,
  fetchPoemsFailure,
  addPoem,
  deletePoem,
} = poemsSlice.actions;

export default poemsSlice.reducer;
