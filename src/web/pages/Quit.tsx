import { Container, Box, Paper } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Quit = () => {
  const { state } = useLocation();
  return (
  <Container>
    <Paper elevation={3} >
      <Box margin={5}>
        Numbers and frequency: {state.numbersOutput}
      </Box>
      </Paper>
      <Box margin={5}>
      Thanks for playing, <Link to="..">play again</Link>.
      </Box>
  </Container>
  )
};

export default Quit;
