import { configureStore } from '@reduxjs/toolkit';
import talentReducer from '../features/talents/talentSlice';

const store = configureStore({
  reducer: {
    talents: talentReducer,
  },
});

export default store;
