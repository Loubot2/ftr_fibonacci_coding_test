import { Container } from '@mui/material'
import IntervalInput from '../components/IntervalInput'
import { type PageProps } from './types'

const StartPage = ({ navigate }: PageProps) => {
  const onStart = (interval: number) => {
    navigate('/game', { state: { interval } })
  }

  return (
    <Container>
          <p className="lead">
          Welcome to Fibonacci game.
          </p>
      <IntervalInput onStart={onStart} ></IntervalInput>
  </Container>
  )
}

export default StartPage
