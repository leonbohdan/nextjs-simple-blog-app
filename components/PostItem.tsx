import { Post } from '../interfaces';
import Link from 'next/link';

export interface PostProps{
  post: Post;
}

export const PostItem = ({ post }: PostProps) => {
  return (
    <>
      <h1>Post</h1>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <a>
          {post.id} : {post.title}
        </a>
      </Link>
    </>
  )
}