import { useEffect, useRef } from 'react'
import eventBus from '../EventBus'
import { convertNumbersToString, type NumberFrequency } from '../../core/numberInput'

interface OutputProps {
  interval: number
  paused: boolean
  numbers: Map<string, NumberFrequency>
}
const IntervalOutput = ({ interval, paused, numbers }: OutputProps) => {
  function useInterval (callback, delay) {
    const savedCallback: any = useRef()

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick () {
        if (savedCallback.current !== undefined) { savedCallback.current() };
      }
      if (delay !== null) {
        const id = setInterval(tick, delay)
        return () => { clearInterval(id) }
      }
    }, [delay])
  }

  const addMessage = (message: string) => {
    eventBus.dispatch('addMessage', { message, type: 'report' })
  }

  if (interval > 0) {
    useInterval(() => {
      if (!paused) {
        addMessage(convertNumbersToString(numbers))
      }
    }, (interval * 1000))
  }

  return (
    <></>
  )
}

export default IntervalOutput
