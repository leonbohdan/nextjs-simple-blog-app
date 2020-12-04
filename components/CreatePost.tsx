import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const Lin = styled.a`
  color: black;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin: 10px;
  transition: color 0.4s ease-in-out;

  :hover {
    color: lightgray;
  }
`;

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function addPost() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      title: `${title}`,
      body: `${body}`,
    });

    let requestOptions: RequestOptionsProps = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://simple-blog-api.crew.red/posts', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    addPost();
    setTitle('');
    setBody('');
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            pattern="[\u0400-\u04FFA-Za-z0-9\s]{4,30}"
            title="Title must be between 4 and 30 characters in length and contain only letters and numbers"
            required
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </Label>

        <Label htmlFor="text">
          <textarea
            id="text"
            name="body"
            placeholder="Write your text here"
            rows={10}
            cols={45}
            maxLength={1000}
            title="Post must be not more than 1000 characters in length"
            required
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
        </Label>

        <Button type="submit">Create</Button>

        {/* <p>Post created!</p> */}

        <Link href="/">
          <Lin>Back to posts</Lin>
        </Link>
      </Form>

    </>
  );
}
