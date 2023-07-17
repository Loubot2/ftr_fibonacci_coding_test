import { Container } from '@mui/material'
import Game from '../components/Game'
import { type PageProps } from './types'

export type GamePageProps = PageProps & {
  state: {
    interval: number
  }
}

const GamePage = ({ navigate, state }: GamePageProps) => {
  const interval: number = state.interval

  const onQuit = (numbersOutput: string) => {
    navigate('/quit', { state: { numbersOutput } })
  }

  return (
    <Container>
      <Game onQuit={onQuit} interval={interval} />
  </Container>
  )
}

export default GamePage
