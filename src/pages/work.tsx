import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'

import { Content } from '../components/Content'

import { client } from '../services/client'
import Image from 'next/image'

interface ServerSideDataProps {
  work: {
    id: string
    name: string
    logo: {
      url: string
      width: number
      height: number
    }
    responsibilities: {
      title: string
      description: string
      tags: string[]
      id: string
    }[]
  }[]
}

export default function Work({ work }: ServerSideDataProps) {
  return (
    <Content>
      <header className="my-10">
        <h1>My Journey & About Me</h1>

        <p>{`Hello, my name is Andres, I'm a front end developer. That's it, I don't talk much.`}</p>
      </header>

      <nav>
        <button className="transition-[:hover] duration-300 hover:text-white hover:bg-zinc-900 text-white bg-zinc-900 dark:bg-white text-xs font-medium p-3 border border-zinc-700 dark:text-zinc-900">
          DOWNLOAD MY CV
        </button>
        <button className=" text-xs border-l-0 font-medium p-3 border border-zinc-700">
          {`SEE MY WORK'S AND LEARNING'S`}
        </button>
      </nav>

      <ul className="mt-10">
        {work.map((item) => (
          <li key={item.id} className="mb-10">
            {item?.logo && (
              <Image
                src={item?.logo.url}
                width={item?.logo.width}
                height={item?.logo.height}
                alt=""
              />
            )}

            <span className="block font-medium mt-5">{item.name}</span>

            <ul className="list-disc ml-5 mt-5">
              {item.responsibilities.map((responsability) => (
                <li key={responsability.id} className="marker:text-blue-500">
                  <span className="block text-sm font-medium my-5">
                    {responsability.title}
                  </span>

                  <span className="text-sm ">{responsability.description}</span>

                  <section className="flex items-center mt-5">
                    {responsability.tags.map((item) => (
                      <span
                        key={item}
                        className="first:rounded-l-lg last:border-none border-r dark:border-zinc-700/50 last:rounded-r-lg text-xs py-2 px-4 dark:bg-neutral-800 bg-zinc-100"
                      >
                        {item}
                      </span>
                    ))}
                  </section>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetAllWorks {
        work {
          id
          name
          logo {
            url
            width
            height
          }
          responsibilities {
            title
            description
            tags
            id
          }
        }
      }
    `,
  })
  return {
    props: data,
  }
}
