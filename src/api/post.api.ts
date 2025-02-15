import axios from 'axios';

// 해당 pageNumber의 게시글 페이지를 받아옵니다.
export const getPostPage = async (pageNumber: number) => {
  const response = await axios.get(`/post?page=${pageNumber}`);
  return response.data;
};
