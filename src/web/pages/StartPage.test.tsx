import { render, screen, cleanup } from '@testing-library/react'
import StartPage from './StartPage'
import { type NavigateFunction } from 'react-router-dom'

test('Start page renders successfully', () => {
  const navigate: NavigateFunction = (_to: any, _options?: any) => {}
  render(<StartPage navigate={navigate} />)
  const intro = screen.getByText('Welcome to Fibonacci game.')
  expect(intro.textContent).toEqual('Welcome to Fibonacci game.')
  cleanup()
})
