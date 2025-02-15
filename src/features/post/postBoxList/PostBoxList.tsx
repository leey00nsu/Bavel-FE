import { getPostPage } from '@/api/post.api';
import { PostBox, PostBoxSkeletonList } from '@/features/post';
import { PostPage } from '@/types/post.type';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';

const PostBoxList = () => {
  const { ref, inView } = useInView();
  const fetchPostPage = async ({ pageParam = 0 }) => {
    console.log('fetch', pageParam);
    const response = await getPostPage(pageParam);
    return response;
  };

  const {
    data: postPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<PostPage>(['posts'], fetchPostPage, {
    getNextPageParam: lastPage => {
      return lastPage.hasNext ? lastPage.pageId + 1 : undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="bg-white">
      {postPage?.pages.map(page =>
        page.posts.map((post, index) => (
          <Link to={`/post/${post.id}`} key={index}>
            <PostBox {...post} />
          </Link>
        )),
      )}
      {isFetching && <PostBoxSkeletonList />}
      <div ref={ref} />
    </div>
  );
};

export default PostBoxList;
