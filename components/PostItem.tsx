import { Post } from '../interfaces';
import Link from 'next/link';
import styled from 'styled-components';

export interface PostProps{
  post: Post;
}

type RequestOptionsProps = {
  method: string;
  redirect: any
};

const Button = styled.button`
  display: inline-block;
  padding: 0.2rem 0;
  margin: 0.2rem 1rem;
  width: 5rem;
  background: transparent;
  color: palevioletred;
  font-weight: 800;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid palevioletred;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  transition: background 0.4s ease-in-out;

  :hover {
    background: palevioletred;
    color: white;
  }

  :active {
    transform: scale(0.99);
  }
`;

const Lin = styled.a`
  color: black;
  cursor: pointer;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  transition: color 0.4s ease-in-out;

  :hover {
    color: lightgray;
  }
`;

export const PostItem = ({ post }: PostProps) => {
  async function deletePost(id: number) {
    let requestOptions: RequestOptionsProps = {
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`https://simple-blog-api.crew.red/posts/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
  
  return (
    <>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <Lin>
          {post.id} : {post.title}
        </Lin>
      </Link>

      <form>
        <Button
          type="submit"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          Delete Post
        </Button>
      </form>
    </>
  );
}