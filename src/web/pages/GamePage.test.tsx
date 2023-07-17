import { render, screen, cleanup } from '@testing-library/react'
import GamePage from './GamePage'
import { type NavigateFunction } from 'react-router-dom'

test('Game page renders successfully', () => {
  const navigate: NavigateFunction = (_to: any, _options?: any) => {}
  const state = { interval: 10 }
  render(<GamePage navigate={navigate} state={state} />)
  const intro = screen.getByText('Numbers and their frequency will be emitted every 10 seconds')
  expect(intro.textContent).toEqual('Numbers and their frequency will be emitted every 10 seconds')
  cleanup()
})
