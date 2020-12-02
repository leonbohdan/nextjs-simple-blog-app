import React, { ReactNode } from 'react'
import Link from 'next/link'
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

      <header>-----------</header>

      <main>{children}</main>

      <footer>--------</footer>
    </div>
  );
}
