import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation }
  from 'react-router-dom'
import Game from './pages/GamePage'
import Quit from './pages/QuitPage'
import Start from './pages/StartPage'
import { Container } from '@mui/material'

function GameRoutes () {
  const navigate = useNavigate()
  const state = useLocation().state
  return (
            <Routes>
                <Route path='/' element={<Start navigate={navigate} />} />
                <Route path='/quit' element={<Quit navigate={navigate} state={state} />} />
                <Route path='/start' element={<Start navigate={navigate} />} />
                <Route path='/game' element={<Game navigate={navigate} state={state} />} />
            </Routes>
  )
}

function App () {
  return (
        <Container>
           <h1 className="display-4">Fibonacci</h1>
        <Router>
            <GameRoutes/>
        </Router>
        </Container>
  )
}

export default App
