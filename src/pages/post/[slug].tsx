import { gql } from '@apollo/client'
import { format } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Content } from '../../components/Content'
import { client } from '../../services/client'

interface Post {
  post: {
    content: {
      html: string
    }
    createdBy: {
      name: string
    }
    id: string
    title: string
    preview: string
    tags: string[]
    createdAt: string
  }
}

export default function PostBySlug({ post }: Post) {
  return (
    <>
      <Head>
        <title>Andres.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <header className="mt-10">
          <section className="flex flex-row items-center gap-x-2 mb-10">
            <div className="p-1 border-2 border-zinc-700 rounded-full">
              <Image
                src="https://github.com/AndresdoSantos.png"
                alt="My profile photo"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>

            <p className="text-xs mb-0 text-zinc-500">
              Written by{' '}
              <strong className="text-zinc-700 text-sm font-medium">
                {post.createdBy.name}
              </strong>{' '}
              in{' '}
              <strong className="text-zinc-700 text-sm font-medium">
                {format(new Date(post.createdAt), "MMM dd',' yyyy")}
              </strong>
            </p>
          </section>

          <h1>{post.title}</h1>

          <p>{post.preview}</p>
        </header>

        <article
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </Content>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const { slug } = params

  const { data } = await client.query({
    query: gql`
      query GetAllPosts($slug: String) {
        postsConnection(where: { slug: $slug }) {
          edges {
            node {
              id
              tags
              title
              preview
              createdAt
              content {
                html
              }
              createdBy {
                name
              }
            }
          }
        }
      }
    `,
    variables: {
      slug,
    },
  })

  return {
    props: {
      post: data ? data.postsConnection.edges[0].node : {},
    },
  }
}
