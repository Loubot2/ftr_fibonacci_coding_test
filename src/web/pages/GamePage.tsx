import React from 'react'
import { Container } from '@mui/material'
import Game from '../components/Game'
import {useLocation, useNavigate} from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const interval: number = state.interval;


  const onQuit = (numbersOutput: string) => {
    navigate("/quit", {state: {numbersOutput} });
  }

  return (
    <Container>
  `    <h1 className="display-4">Fibonacci</h1>
      <Game onQuit={onQuit} interval={interval} />
  </Container>
  )
}

export default GamePage
