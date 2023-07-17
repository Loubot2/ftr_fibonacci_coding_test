import { Container, Box, Paper, ButtonGroup, Button } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { type PageProps } from './types'

export type QuitPageProps = PageProps & {
  state: {
    numbersOutput?: string
  }
}

const QuitPage = ({ navigate, state }: QuitPageProps) => {
  const onPlayAgain = () => {
    navigate('/start')
  }

  return (
  <Container>
    <Paper elevation={3} >
      <Box margin={5}>
        Numbers and frequency: {state.numbersOutput}
      </Box>
      </Paper>
      <Box margin={5}>
      Thanks for playing.
      </Box>
      <Box margin={5}>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
      startIcon={<RestartAltIcon fontSize="inherit" />}
      onClick={onPlayAgain}
      >Play again</Button>
    </ButtonGroup>
    </Box>
  </Container>
  )
}

export default QuitPage
