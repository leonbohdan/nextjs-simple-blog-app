import { useState } from 'react';

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
    <>
      <h1>Comments</h1>
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
      <form onSubmit={handleSubmit}>
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
        <button>Send comment</button>
      </form>
    </>
  );
};
