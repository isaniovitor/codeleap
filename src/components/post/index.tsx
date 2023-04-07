import React from 'react';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';
import * as S from './styles';
import { getPostTime } from '../../helpers/data';

//mudar tudo props
export interface PostData {
  id?: number;
  username: string;
  created_datetime?: string;
  title: string;
  content: string;
}

interface PostProps {
  post: PostData;
  setCurrentPost: React.Dispatch<React.SetStateAction<PostData | undefined>>;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Post =({ post, setCurrentPost, setShowEditModal, setShowDeleteModal }: PostProps) => {
  const userLoged =  window.localStorage.getItem('username');

  function onEditBottonClick(){
    setCurrentPost(post);
    setShowEditModal(true);
  }

  function onDeleteBottonClick(){
    setCurrentPost(post);
    setShowDeleteModal(true);
  }

	return (
		<S.Container>
      <S.Main>
      <S.PostHeader>
        <p>{post.title}</p>

        {userLoged === post.username && 
        <S.NavBar>
          <button onClick={onDeleteBottonClick}>
            <img src={deleteIcon}/>
          </button>
          <button onClick={onEditBottonClick}>
            <img src={editIcon}/>
          </button>
        </S.NavBar>
        }
      </S.PostHeader>
      <S.BodyContainer>
        <S.BodyInfo>
          <p>@{post.username}</p>
          <p>{getPostTime(post.created_datetime)}</p>
        </S.BodyInfo>
        <S.Body>{post.content}</S.Body>
      </S.BodyContainer>
      </S.Main>
    </S.Container>
	);
};

export default Post;

