import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { Post } from '../../interfaces';

export interface PostProps{
  post: Post;
}
 
export default function PostDetail({post}: PostProps) {
  const router = useRouter();
  
  return (
    <Layout title={`Blog | Post#${router.query.id}`}>
      <h1>Post {router.query.id}</h1>
      {/* <p>{post.title}</p>
      <p>{post.body}</p> */}
    </Layout>
  );
};