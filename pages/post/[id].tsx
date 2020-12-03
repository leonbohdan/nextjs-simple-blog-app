import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Post } from '../../interfaces';
import { Comments } from '../../components/Comments';

export interface PostProps {
  post: Post;
  errors?: string;
}
 
export default function PostDetail({ post: serverPost }: PostProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(`https://simple-blog-api.crew.red/posts/${router.query.id}?_embed=comments`);
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!serverPost) {
    return (
      <Layout>
        <p>Loading ...</p>
      </Layout>
    );
  }

  return (
    <Layout title={`Blog | Post#${post.id}`}>
      <h1>
        {post.title} #{post.id}
      </h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Comments comments={post.comments} id={post.id} />
      <Link href="/">
        <a>Back to all posts</a>
      </Link>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const id = params?.id;
  const response = await fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
  const post = await response.json();

  if (!req) {
    return {
      props: { post: null}
    }
  }

  return {
    props: { post }
  };
};
