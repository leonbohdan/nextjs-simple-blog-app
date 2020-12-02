import { Post } from '../interfaces';
import { PostItem } from '../components/PostItem';
 
export interface PostProps{
  posts: Post[];
}

export const Posts = ({ posts }: PostProps) => {

  return (
    <>
      <h1>Posts</h1>
      {/* <pre>{JSON.stringify([...posts].reverse(), null, 2)}</pre> */}
      <ul>
        {[...posts].reverse().map(post => (
          <li key={post.id}>
            <PostItem post={post}/>
          </li>
        ))}
      </ul>
    </>
  );
};
