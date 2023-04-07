import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './post-slice';

export default configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});