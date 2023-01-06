import { Content } from '../components/Content'

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
