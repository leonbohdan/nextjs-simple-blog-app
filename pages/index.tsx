import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Post } from '../interfaces';
import { Posts } from '../components/Posts';

export interface PostProps {
  posts: Post[];
}

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  font-weight: 800;
  text-transform: uppercase;
  border: 2px solid black;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  transition: background 0.4s ease-in-out;

  :hover {
    background: lightgray;
  }

  :active {
    transform: scale(0.99);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`

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
      <Container>
        <Link href="/createPost">
          <Button>Create new Post</Button>
        </Link>
      </Container>
      <Posts posts={posts} />
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
