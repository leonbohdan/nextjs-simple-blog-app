import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

type Props = {
  children?: ReactNode
  title?: string
}

const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: #eee;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background: #0b0d0d;
  color: white;
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #0b0d0d;
  color: white;
`;

const Title = styled.h1`
  margin: 1em;
`

export default function Layout({ children, title = 'Blog | Next.js' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is nextjs app" />
      </Head>

      <Body>
        <Header>
          <Title>Blog with Next.js 👋</Title>
          <p>Real stories & opinions about running an independent membership business.</p>
        </Header>

        <main>{children}</main>

        <Footer>Blog Footer</Footer>
      </Body>
    </>
  );
}
