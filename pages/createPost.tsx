import Layout from '../components/Layout';
import CreatePost from '../components/CreatePost';

export default function Create() {
  return (
    <>
      <Layout title="Blog | Create Post">
        <h1>CreatePost</h1>
        <CreatePost />
      </Layout>
    </>
  );
}
