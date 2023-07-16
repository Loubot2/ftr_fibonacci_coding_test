import React, { useState } from 'react'
import { Container, Box, Button, Paper } from '@mui/material'
import ButtonControl from '../components/ButtonControl'
import NumberInputControl from '../components/NumberInputControl'
import Output from '../components/Output'
import IntevalOutput from '../components/IntevalOutput'
import { getNumberFrequency, convertNumbersToString, NumberFrequency } from '../../core/numberInput'
import eventBus from "../EventBus";

interface GameControlProps {
  onQuit: (numbersOutput: string) => void;
  interval: number
}

const Game = ({ onQuit, interval }: GameControlProps) => {
  const [numbers, setNumbers] = useState<Map<string,NumberFrequency>>(new Map())
  const [paused, setPaused] = useState<boolean>(false)

  const onToggle = (paused: boolean) => {
    setPaused(paused)
  }

  const onSubmitNumber = (newNumber: string) => {
    const result: NumberFrequency = getNumberFrequency(newNumber, numbers);
    let updatedNumbers: Map<string,NumberFrequency> = new Map(numbers);
    updatedNumbers.set(newNumber, result);
    if(result.fibonacci){
      eventBus.dispatch("addMessage", { message: 'FIB', type: 'fib' });
    }
    setNumbers(updatedNumbers);
  }

  const onClickQuit = () => {
    const numbersOutput = convertNumbersToString(numbers);
    onQuit(numbersOutput);
  }

  return (
    <Container>
      <Container>Numbers and their frequency will be emitted every {interval} seconds</Container>
      <NumberInputControl onSubmit={onSubmitNumber} ></NumberInputControl>
      <ButtonControl onToggle={onToggle} paused={paused} ></ButtonControl>
      <IntevalOutput interval={interval} paused={paused} numbers={numbers} />
      <Paper elevation={3} >
        <Output />
      </Paper>
      <Box margin={5}>
          <Button 
          onClick={onClickQuit}
          >Quit Game</Button>
      </Box>
    </Container>
  )
}

export default Game
