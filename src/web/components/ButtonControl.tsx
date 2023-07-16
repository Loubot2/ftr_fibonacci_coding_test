import React from 'react'
import Button from '@mui/material/Button'
import { Container, Grid, Box, ButtonGroup } from '@mui/material'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
interface ButtonProps {
  onToggle: (paused: boolean) => void
  paused: boolean
}

const ButtonControl = ({ onToggle, paused }: ButtonProps) => {
  const buttonLabel = paused ? 'Resume' : 'Halt';
  const icon = paused ? <PlayArrowIcon fontSize="inherit" /> : <PauseIcon fontSize="inherit" />;
  const message = paused ? 'Timer paused' : 'Timer running';
  return (
  <Container>
    <Grid>
      <Box margin={5}>
        {message}

      </Box>
    </Grid>
    <Box margin={5}>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button startIcon={icon} variant="outlined" onClick={() => { onToggle(!paused) }}>{buttonLabel}</Button>
    </ButtonGroup>
    </Box>
  </Container>
  )
}

export default ButtonControl
