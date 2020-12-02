import Link from 'next/link'
import Layout from '../components/Layout'
import Posts from '../components/Posts';

export default function IndexPage() {
  return (
    <Layout title="Home">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/createPost">
          <button>Create new Post</button>
        </Link>
      </p>
      <Posts />
    </Layout>
  );
}
