import axios from 'axios';
import { toast } from 'react-toastify';
import { PostData } from '../components/post';
import {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
  addPostStart,
  addPostSuccess,
  addPostFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
  editPostFailure,
  editPostStart,
  editPostSuccess,
} from '../redux/post-slice';
import { useSelector } from 'react-redux';

export const getPosts = (endpoint?: string | null, currentPosts?: PostData[]) => async (dispatch) => {

  try {
    dispatch(getPostsStart());
    const response = await axios.get(endpoint || 'https://dev.codeleap.co.uk/careers/?limit=1000');

    if (response.status >= 200 && response.status < 300) {      
      response.data.results = currentPosts ? [...currentPosts, ...response.data.results] : response.data.results;
      dispatch(getPostsSuccess(response.data));
    }
  } catch (error) {
    dispatch(getPostsFailure(error.message));
  }  
}

export const addPost = (post: PostData) => async (dispatch) => {
  try {
    dispatch(addPostStart());
    const response = await axios.post('https://dev.codeleap.co.uk/careers/', post);

    if (response.status >= 200 && response.status < 300) {
      dispatch(addPostSuccess());
      toast.success('Operation completed successfully!');

      dispatch(getPosts());
    }
  } catch (error) {
    dispatch(addPostFailure(error.message));
  }  
}

export const editPost = (id: number, post: PostData) => async (dispatch) => {
  try {
    dispatch(editPostStart());
    const response = await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, post);

    if (response.status >= 200 && response.status < 300) {
      dispatch(editPostSuccess());
      toast.success('Operation completed successfully!');

      dispatch(getPosts());
    }
  } catch (error) {
    dispatch(editPostFailure(error.message));
  }  
}

export const deletePost = (id: number) => async (dispatch) => {
  try {
    dispatch(deletePostStart());
    const response = await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`);

    if (response.status >= 200 && response.status < 300) {      
      dispatch(deletePostSuccess());
      toast.success('Operation completed successfully!!');

      dispatch(getPosts());
    }
  } catch (error) {
    dispatch(deletePostFailure(error.message));
  }  
}