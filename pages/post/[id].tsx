import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
 
export default function Post() {
  const router = useRouter();
  
  return (
    <Layout>
      <h1>Post {router.query.id}</h1>
    </Layout>
  );
};