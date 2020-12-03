import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Post } from '../../interfaces';
import { Comments } from '../../components/Comments';

export interface PostProps{
  post: Post;
}
 
export default function PostDetail({ post }: PostProps) {
  return (
    <Layout title={`Blog | Post#${post.id}`}>
      <h1>
        {post.title} #{post.id}
      </h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Comments comments={post.comments} id={post.id}/>
      <Link href='/'>
        <a>Back to all posts</a>
      </Link>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {

  const response = await fetch(`https://simple-blog-api.crew.red/posts`);
  const posts = await response.json();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths, fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const response = await fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
    const post = await response.json();

    return { props: { post } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
