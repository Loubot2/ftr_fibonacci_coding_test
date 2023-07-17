import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Game from './pages/GamePage';
import Quit from './pages/Quit';
import Start from './pages/Start';
import { Container } from '@mui/material';

function App () {
  return (
        <Container>
        `    <h1 className="display-4">Fibonacci</h1>
        <Router>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/quit' element={<Quit />} />
                <Route path='/start' element={<Start />} />
                <Route path='/game' element={<Game />} />
            </Routes>
        </Router>
        </Container>
  );
}

export default App;
