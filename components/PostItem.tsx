import { Post } from '../interfaces';
import Link from 'next/link';

export interface PostProps{
  post: Post;
}

type RequestOptionsProps = {
  method: string;
  redirect: any
};

export const PostItem = ({ post }: PostProps) => {
  async function deletePost(id: number) {
    let requestOptions: RequestOptionsProps = {
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`https://simple-blog-api.crew.red/posts/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
  
  return (
    <>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <a>
          {post.id} : {post.title}
        </a>
      </Link>
      <form>
        <button
          type="submit"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          Delete Post
        </button>
      </form>
    </>
  );
}