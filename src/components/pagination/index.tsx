import { useState, useEffect } from "react";
import Post, { PostData } from "../post";
import * as S from './styles';

// component link: https://www.npmjs.com/package/react-paginate
interface ItemsProps {
  posts: PostData[],
  functions: {
    setCurrentPost: React.Dispatch<React.SetStateAction<PostData | undefined>>,
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>,
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>,
  }
}

interface PaginatedItemsState {
  itemsPerPage: number,
  items: PostData[],
  functions: {
    setCurrentPost: React.Dispatch<React.SetStateAction<PostData | undefined>>,
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>,
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>,
  }
}

function Items({posts, functions}: ItemsProps) {    
  return (
    <>
        {posts.map((post: PostData) => (
        <Post post={post} key={post.id} setCurrentPost={functions.setCurrentPost} setShowEditModal={functions.setShowEditModal} 
          setShowDeleteModal={functions.setShowDeleteModal}/>
        ))}
    </>
  );
}

function Pagination({ itemsPerPage, items, functions }: PaginatedItemsState) {
  // const { next, count } = useSelector(state => state.posts);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<PostData[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    setItemOffset(newOffset);

    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <S.Container>
      <Items posts={currentItems} functions={functions}/>
      <S.ReactPaginateComponent
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </S.Container>
  );
}

export default Pagination;