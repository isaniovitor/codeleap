import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  previous: "",
  count: 0,
  next: "",
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getPostsSuccess: (state, { payload }) => {      
      state.loading = false;
      state.posts =  payload.results;
      state.next = payload.next;
      state.count = payload.count;
      state.previous = payload.previous;
    },
    getPostsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    addPostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addPostSuccess: (state) => {
      state.loading = false;
      state.posts =  [];
      state.next = '';
      state.count = 0;
      state.previous = '';
    },
    addPostFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    editPostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    editPostSuccess: (state) => {
      state.loading = false;
      state.posts =  [];
      state.next = '';
      state.count = 0;
      state.previous = '';
    },
    editPostFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    deletePostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deletePostSuccess: (state) => {
      state.loading = false;
      state.posts =  [];
      state.next = '';
      state.count = 0;
      state.previous = '';
    },
    deletePostFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {getPostsStart, getPostsSuccess, getPostsFailure, addPostStart, addPostSuccess, addPostFailure,
  editPostSuccess, editPostStart, editPostFailure, deletePostStart, deletePostSuccess, deletePostFailure} = postSlice.actions;
export const postReducer = postSlice.reducer;