import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

export default function Layout({ children, title = 'Blog | Next.js' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is nextjs app" />
      </Head>

      <header>
        <h1>Blog with Next.js 👋</h1>
        <p>Real stories & opinions about running an independent membership business.</p>
      </header>
      <hr />

      <main>{children}</main>

      <hr />
      <footer>Blog Footer</footer>
    </div>
  );
}
