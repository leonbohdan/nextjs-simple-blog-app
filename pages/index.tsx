import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Post } from '../interfaces';
import { Posts } from '../components/Posts';

export interface PostProps {
  posts: Post[];
}

export default function IndexPage({ posts: serverPosts }: PostProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch('https://simple-blog-api.crew.red/posts');
      const data = await response.json();
      setPosts(data);
    }

    if (!posts) {
      load();
    }
  }, [])

  console.log(posts);
  
  return (
    <Layout title="Blog | Home | Posts">
      <p>
        <Link href="/createPost">
          <button>Create new Post</button>
        </Link>
      </p>
      <Posts posts={posts}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!req) {
    return {
      props: { posts: null },
    }
  }

  const response = await fetch('https://simple-blog-api.crew.red/posts');
  const posts = await response.json();

  return {
    props: { posts },
  };
};
