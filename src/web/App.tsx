import React from 'react'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Game from './pages/GamePage';
import Quit from './pages/Quit';
import Start from './pages/Start';
 
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/quit' element={<Quit />} />
                <Route path='/start' element={<Start />} />
                <Route path='/game' element={<Game />} />
            </Routes>
        </Router>
    );
}
 
export default App;
