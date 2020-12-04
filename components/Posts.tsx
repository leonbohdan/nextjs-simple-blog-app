import { Post } from '../interfaces';
import { PostItem } from '../components/PostItem';
import styled from 'styled-components';
 
export interface PostProps{
  posts: Post[];
}

const Title = styled.h1`
  text-align: center;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  margin: 20px 50px;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 100px;

  border: 1px solid black;
  border-radius: 10px;
  background: #fff;
  margin: 5px;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.01);
  }
`;

export const Posts = ({ posts }: PostProps) => {
  return (
    <>
      <Title>Posts</Title>
      <List>
        {[...posts].reverse().map((post) => (
          <ListItem key={post.id}>
            <PostItem post={post} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
