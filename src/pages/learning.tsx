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
        <h1>{`I'm studying`}</h1>

        <p>{`Hello, my name is Andres, I'm a front end developer. That's it, I don't talk much.`}</p>
      </header>
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
