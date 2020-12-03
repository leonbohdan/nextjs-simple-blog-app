export interface Post {
  id: number;
  title: string;
  body: string;
  comments: {
    id: number;
    body: string;
    postId: number;
  };
}
