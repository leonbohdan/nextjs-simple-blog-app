import { useState, useEffect } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  console.log(title);
  console.log(body);
  

  async function add() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      title: `${title}`,
      body: `${body}`,
    });

    let requestOptions = {
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

  useEffect(() => {
    
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    add();
  }

  return (
    <>
      <h1>CreatePost Component</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
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
        </label>

        <label htmlFor="text">
          Text
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
        </label>

        <button type="submit">Create</button>
      </form>
    </>
  );
}
