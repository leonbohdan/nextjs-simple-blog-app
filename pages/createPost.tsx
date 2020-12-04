import Layout from '../components/Layout';
import CreatePost from '../components/CreatePost';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

export default function Create() {
  return (
    <>
      <Layout title="Blog | Create Post">
        <Title>CreatePost</Title>
        <CreatePost />
      </Layout>
    </>
  );
}
