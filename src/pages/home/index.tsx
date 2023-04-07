import { useEffect, useRef, useState } from 'react'
import { Form } from '@unform/web';
import { useDispatch, useSelector } from "react-redux"
import { Bars } from  'react-loader-spinner'
import Input from '../../components/input';
import * as S from './styles';
import Textarea from '../../components/textarea';
import { PostData } from '../../components/post';
import Modal from '../../components/modal';
import { addPost, deletePost, editPost, getPosts } from '../../actions/postActions';
import Pagination from '../../components/pagination';

function Home() {
  const userLoged =  window.localStorage.getItem('username');
  const {posts, loading, next} = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<PostData>();
  const [isEmpyte, setIsEmpyte] = useState(true);
	const formRef = useRef(null);
	const editFormRef = useRef(null);

  function handleSubmit(post: PostData, { reset }){
    const finalPost: PostData = {username: window.localStorage.getItem('username'), title: post.title, content: post.content};
    dispatch(addPost(finalPost));
    reset();
  }

  function handleEditModelSubmit(post: PostData){
    dispatch(editPost(currentPost?.id, post));
    setShowEditModal(false);
  }

  function handleDeleteModelSubmit(){
    dispatch(deletePost(currentPost?.id));
    setShowDeleteModal(false);
  }

  //checkIsEmpty
  function checkIsEmpyte(){
    setIsEmpyte(formRef.current?.getFieldValue('title') == '' ||
     formRef.current?.getFieldValue('content') == '');
  }

  useEffect(() => {
    if (!loading && next != null) {      
      console.log(next);
      
      dispatch(getPosts(next, posts));
    }
  }, [posts]);

  return (
    <S.Container>
      <div className='na'>
      <S.Header>
        <p>Welcome to CodeLeap Network, {userLoged}</p>
      </S.Header>
      <S.Main>
        {showEditModal &&
          <Modal>
            <S.EditModalTitle>Edit item</S.EditModalTitle>
            <S.EditModalForm as={Form} ref={editFormRef} onSubmit={handleEditModelSubmit} initialData={currentPost}>
              <Input name='title' onChange={checkIsEmpyte} label='Title' placeholder='' />
              <Textarea name='content' onChange={checkIsEmpyte} label='Content' placeholder='' />
              <S.ButtonsContainer>
                <S.Button onClick={() => {setShowEditModal(false)}} border='1px solid #999' bg='#FFF' color='#000'>Cancel</S.Button>
                <S.Button type='submit' bg='#47B960' color='#FFF'>Edit</S.Button>
              </S.ButtonsContainer>
            </S.EditModalForm>    
          </Modal>
        }

        {showDeleteModal &&
          <Modal>
            <S.DeleteModalTitle>Are you sure you want to delete this item?</S.DeleteModalTitle>
            <S.ButtonsContainer>
              <S.Button onClick={() => {setShowDeleteModal(false)}} border='1px solid #999' bg='#FFF' color='#000'>Cancel</S.Button>
              <S.Button onClick={handleDeleteModelSubmit} bg='#FF5151' color='#FFF'>Delete</S.Button>
            </S.ButtonsContainer>
          </Modal>
        }
                
        <S.Form as={Form} ref={formRef} onSubmit={handleSubmit}>
            <S.FormTitle>What’s on your mind?</S.FormTitle>
            <Input name='title' onChange={checkIsEmpyte} label='Title' placeholder='' />
            <Textarea name='content' onChange={checkIsEmpyte} label='Content' placeholder='' />
            <S.Button type='submit' disabled={isEmpyte} bg='#7695EC' color='#FFF'>Create</S.Button>
        </S.Form>

        {!loading && next == null ? (
          <S.PostsList id='container'>
              {posts.length != 0 && 
              <Pagination itemsPerPage={10} items={posts} functions={{setCurrentPost, setShowEditModal, setShowDeleteModal}}/>
              }
          </S.PostsList>
          ) : (
            <S.Loader>
                <Bars
                  height="80"
                  width="80"
                  color="#7695EC"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
            </S.Loader>
          )
        }
      </S.Main>
      </div>
    </S.Container>
  );
}

export default Home;
