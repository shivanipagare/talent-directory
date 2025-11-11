import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export const fetchTalents = createAsyncThunk("talents/fetchTalents", async (skill = "") => {
  const url = skill ? `${API_URL}?skill=${skill}` : API_URL;
  const response = await axios.get(url);
  return response.data;
});

export const addTalent = createAsyncThunk("talents/addTalent", async (talentData) => {
  const response = await axios.post(API_URL, talentData);
  return response.data;
});

const talentSlice = createSlice({
  name: "talents",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTalents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTalents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTalents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTalent.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default talentSlice.reducer;
