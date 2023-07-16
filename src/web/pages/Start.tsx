import React from 'react'
import { Container } from '@mui/material'
import IntervalInput from '../components/IntervalInput'
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  const onStart = (interval: number) => {
    navigate("/game", {state: {interval} });
  }

  return (
    <Container>
  `    <h1 className="display-4">Fibonacci</h1>
          <p className="lead">
          Welcome to Fibonacci game.
          </p>
      <IntervalInput onStart={onStart} ></IntervalInput>
  </Container>
  )
}

export default Game