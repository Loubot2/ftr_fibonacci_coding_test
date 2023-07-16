import React from 'react'
import { Container, Box } from '@mui/material'
import {Link, useLocation} from "react-router-dom";
// import { NumberFrequency } from '../../core/numberInput'

const Quit = () => {
  let { state } = useLocation();
  return (
  <Container>
      <Box margin={5}>
      {state.numbersOutput}
      </Box>    
      <Box margin={5}>
      Thanks for playing, <Link to="..">play again</Link>.
      </Box>
  </Container>
  )
}

export default Quit