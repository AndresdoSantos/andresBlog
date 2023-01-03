import { gql } from '@apollo/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Content } from '../components/Content'
import { Icon } from '../components/Icons'

import { client } from '../services/client'

export interface CreatedBy {
  name: string
}

export interface ServerSideDataProps {
  posts: {
    createdBy: CreatedBy
    readingTime: string
    tags: string[]
    title: string
    preview: string
    slug: string
    id: string
  }[]
}

export default function Home({ posts }: ServerSideDataProps) {
  const { route } = useRouter()

  return (
    <>
      <Head>
        <title>ANDRES - More than {posts.length - 1} posts.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <header className="flex items-center justify-between my-10">
          <div className="flex items-center justify-center gap-x-1">
            <h5 className="bg-zinc-800 px-2 font-light text-lg text-white">
              ANDRES
            </h5>{' '}
            <span className="font-light text-zinc-700 text-lg">DOSANTOS</span>
          </div>

          <section className="flex flex-row items-center gap-x-10">
            <Link
              href="/"
              className={clsx(
                'font-light text-zinc-600 text-lg hover:text-zinc-900',
                {
                  'text-zinc-900': route === '/',
                },
              )}
            >
              CODE
            </Link>

            <Link
              href="/work"
              className={clsx(
                'font-light text-zinc-600 text-lg hover:text-zinc-900',
                {
                  'text-zinc-900': route === '/work',
                },
              )}
            >
              WORK
            </Link>

            <button className="flex items-center justify-center w-8 h-8 border rounded-xl shadow-lg transition-[:hover] duration-200 hover:scale-110">
              <Icon.DotsTree />
            </button>
          </section>
        </header>

        <ul className="grid grid-cols-2 gap-5">
          {posts.map((post) => (
            <li key={post.id} className="before:content-['']">
              <Link href={encodeURI(`post/${post.slug}`)}>
                <h5 className="text-2xl font-light text-zinc-700 tracking-tight">
                  {post.title}
                </h5>

                {post.tags.map((tag) => (
                  <button key={tag}>
                    <span className="text-xs text-blue-500 font-medium mr-2">
                      {tag}
                    </span>
                  </button>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetAllPosts {
        posts {
          createdBy {
            name
          }
          readingTime
          tags
          title
          preview
          slug
          id
        }
      }
    `,
  })

  return {
    props: data,
  }
}