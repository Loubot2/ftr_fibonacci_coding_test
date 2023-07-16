import React, { useState } from 'react'
import Button from '@mui/material/Button'
import StartIcon from '@mui/icons-material/Start';
import { Container, OutlinedInput, InputAdornment, FormControl, FormHelperText, InputLabel, Grid, Box, ButtonGroup } from '@mui/material'
interface IntervalInputProps {
  onChange: (number: string | undefined) => void
  interval: string | undefined
}


const IntervalInput = ({ onChange, interval }: IntervalInputProps) => {
  return ( <Grid>
      <InputLabel id="demo-simple-select-label">Please input the amount of time in seconds between emitting numbers and their frequency</InputLabel>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">second</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'interval',
              inputMode: 'numeric', pattern: '[0-9]*'
            }}
            onChange={(e) => {
              if (interval !== e.target.value) {
                onChange(e.target.value)
              }
            }}
            value={interval}
          />
          <FormHelperText id="outlined-weight-helper-text">Interval</FormHelperText>
        </FormControl>
    </Grid>)
}

interface IntervalControlProps {
  onStart: (interval: number) => void
}

const IntervalControl = ({ onStart}: IntervalControlProps) => {
  const [interval, setInterval] = useState<string>('')
  const intervalNumber: number | undefined = interval? Number(interval) : undefined;
  const startDisabled=!intervalNumber || !(intervalNumber > 0);
  return <Container> 
    <IntervalInput 
    onChange={(value: string | undefined) => {
      setInterval(value);
    }} 
    interval={interval} 
    />

    <Box margin={5}>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button 
      startIcon={<StartIcon fontSize="inherit" />}
      disabled={startDisabled}
      onClick={() => onStart(intervalNumber || 0)}
      >Start</Button>
    </ButtonGroup>
    </Box>
  </Container>
}

export default IntervalControl
