import { Container } from '@mui/material';
import Game from '../components/Game';
import { useLocation, useNavigate } from 'react-router-dom';

const GamePage = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const interval: number = state.interval;

  const onQuit = (numbersOutput: string) => {
    navigate('/quit', { state: { numbersOutput } });
  };

  return (
    <Container>
      <Game onQuit={onQuit} interval={interval} />
  </Container>
  );
};

export default GamePage;
