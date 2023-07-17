import { render, screen, cleanup } from '@testing-library/react'
import QuitPage from './QuitPage'
import { type NavigateFunction } from 'react-router-dom'

describe('QuitPage', () => {
  test('Quit page renders successfully', () => {
    const navigate: NavigateFunction = (_to: any, _options?: any) => {}
    const state = { numbersOutput: 'test' }
    render(<QuitPage navigate={navigate} state={state} />)
    const intro = screen.getByText(/Numbers and frequency:/)
    expect(intro.textContent).toEqual('Numbers and frequency: test')
    cleanup()
  })
})
