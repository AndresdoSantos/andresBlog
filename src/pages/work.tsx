import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'

import { Content } from '../components/Content'

import { client } from '../services/client'

interface ServerSideDataProps {
  work: {
    id: string
    companyName: string
    companyLogo: {
      url: string
      width: number
      height: number
    }
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
        <button className="transition-[:hover] duration-300 hover:text-white hover:bg-zinc-900 text-white bg-zinc-900 text-xs font-medium p-3 border border-zinc-700">
          DOWNLOAD MY CV
        </button>
        <button className="text-zinc-800 text-xs border-l-0 font-medium p-3 border border-zinc-700">
          {`SEE MY WORK'S AND LEARNING'S`}
        </button>
      </nav>

      <ul className="mt-10">
        <li className="mb-10">
          <span className="text-zinc-800 font-medium">h4money</span>

          <ul className="list-disc ml-5 mt-5">
            <li className="marker:text-blue-500">
              <span className="block text-zinc-800 text-sm font-medium my-5">
                React Native Developer
              </span>

              <span className="text-sm text-zinc-700">
                Aqui tive a oportunidade de trabalhar com o React Native no
                desenvolvimento de um aplicativo de gerenciamento financeiro.
              </span>

              <section className="flex gap-x-2 mt-5">
                {['react', 'react-native', 'javascript', 'typescript'].map(
                  (item) => (
                    <span
                      key={item}
                      className="text-xs py-2 px-4 bg-zinc-100 rounded-full"
                    >
                      {item}
                    </span>
                  ),
                )}
              </section>
            </li>
          </ul>
        </li>

        <li className="mb-10">
          <span className="text-zinc-800 font-medium">Zaal Tecnologia</span>

          {/** <span className="text-xs">18 Mar, 20 - Today</span> */}

          <ul className="list-disc ml-5 mt-5">
            <li className="marker:text-blue-500">
              <span className="block text-zinc-800 text-sm font-medium my-5">
                React Native Developer
              </span>

              <span className="text-sm text-zinc-700">
                Aqui tive a oportunidade de trabalhar com o React Native no
                desenvolvimento de um aplicativo de gerenciamento financeiro.
              </span>

              <section className="flex gap-x-2 mt-5">
                {[
                  'react',
                  'react-native',
                  'javascript',
                  'typescript',
                  'state managment',
                  'tailwindcss',
                  'styled-components',
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs py-2 px-4 bg-zinc-100 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </section>
            </li>
          </ul>
        </li>
      </ul>

      {/** {work.map((item) => (
        <div key={item.id}>
          <p>{item.companyName}</p>

          <Image
            src={item.companyLogo.url}
            width={item.companyLogo.width}
            height={item.companyLogo.height}
            alt=""
          />
        </div>
      ))} */}
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetAllWorks {
        work(stage: DRAFT) {
          id
          companyName
          companyLogo {
            url
            width
            height
          }
        }
      }
    `,
  })
  return {
    props: data,
  }
}
