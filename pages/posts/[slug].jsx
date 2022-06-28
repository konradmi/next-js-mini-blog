import Head from 'next/head'
import { getPost, getSlugs } from '../../lib/posts'

export const getStaticPaths = async () => {
  const slugs = await getSlugs()
  return {
    paths: slugs.map(slug => ({
      params: { slug }
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const post = await getPost(slug)
  return {
    props: {
      post,
    }
  }
}

const FirstPostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - My blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }}/>
      </main>
    </>
  )
}

export default FirstPostPage
