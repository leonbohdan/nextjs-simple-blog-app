import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
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

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 50px;
  `;

  const Title = styled.h1`
    text-align: center;
    margin: 20px 0;
  `;

  const Lin = styled.a`
    color: black;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    transition: color 0.4s ease-in-out;

    :hover {
      color: lightgray;
    }
  `;

  return (
    <Layout title={`Blog | Post#${post.id}`}>
      <Container>
        <Title>
          {post.title} #{post.id}
        </Title>
        <p>{post.body}</p>
        <Comments comments={post.comments} id={post.id} />
        <Link href="/">
          <Lin>Back to all posts</Lin>
        </Link>
      </Container>
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
