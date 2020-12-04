import { useState } from 'react';
import styled from 'styled-components';

type Comment = {
  id: number;
  body: string;
  postId: number;
};

export interface CommentsProps {
  comments: any
  id: number
}

type RequestOptionsProps = {
  method: string;
  headers: {};
  body: string;
  redirect: any;
};

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

export const Comments = ({ comments, id }: CommentsProps) => {
  const [comment, setComment] = useState('');

  async function addComment() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      postId: id,
      body: `${comment}`,
    });

    let requestOptions: RequestOptionsProps = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://simple-blog-api.crew.red/comments', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  const handleSubmit = () => {
    addComment();
    setComment('');
  };

  return (
    <Container>
      <Title>Comments</Title>
      {comments.length > 0 ? (
        <ol>
          {comments.map((comment: Comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ol>
      ) : (
        <div>
          <h3>Here is no comments yet!</h3>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <p>Write your comment below!</p>
        <textarea
          name="body"
          placeholder="Write your text here"
          rows={10}
          cols={45}
          maxLength={200}
          title="Comment must be not more than 200 characters in length"
          required
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        ></textarea>
        <Button>Send comment</Button>
      </Form>
    </Container>
  );
};
