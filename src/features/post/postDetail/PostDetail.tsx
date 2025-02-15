import { PostBox } from '@/features/post';
import { useParams } from 'react-router-dom';
import { dummyPosts } from '@/mocks/post.mock';

const PostDetail = () => {
  const postId = Number(useParams().postId);
  const dummyPost = dummyPosts.filter(post => post.id === postId)[0];
  return <>{<PostBox {...dummyPost} full />}</>;
};

export default PostDetail;
