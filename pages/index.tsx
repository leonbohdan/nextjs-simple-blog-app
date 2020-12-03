import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Post } from '../interfaces';
import { Posts } from '../components/Posts';

export interface PostProps {
  posts: Post[];
}

export default function IndexPage({ posts }: PostProps) {
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://simple-blog-api.crew.red/posts');
  const posts = await response.json();

  return {
    props: { posts },
  };
};
