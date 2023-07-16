import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Container, OutlinedInput, FormControl, InputLabel, Grid, Box, ButtonGroup } from '@mui/material'
interface NumberFrequencyProps {
  onSubmit: (newNumber: string) => void
}

const NumberInputControl = ({ onSubmit }: NumberFrequencyProps) => {
  const [number, setNumber] = useState<string>('')
  return (
  <Container>
    <Grid>
      <InputLabel id="demo-simple-select-label">Please enter the next number</InputLabel>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'number',
              inputMode: 'numeric', pattern: '[0-9]*'
            }}
            onChange={(e) => {
              if (number !== e.target.value) {
                setNumber(e.target.value)
              }
            }}
            value={number}
          />
        </FormControl>

    </Grid>
    <Box margin={5}>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button 
      disabled={!number}
      onClick={() => {
        onSubmit(number)
        setNumber('')
      }}>Sumbit</Button>
    </ButtonGroup>
    </Box>
  </Container>
  )
}

export default NumberInputControl
