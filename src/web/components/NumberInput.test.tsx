/* eslint-env jest */

import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import NumberInput from './NumberInput';
import eventBus from '../EventBus';

describe('IntervalInput', () => {
  test('should call fib if fibonacci', async () => {
    let number;
    const onSubmit = (newNumber: string) =>  {
      number = newNumber;
    }
    const onQuit = (_numbersOutput: string) => {};
    render(<NumberInput onSubmit={onSubmit} />);
    const submitButton = screen.getByText('Sumbit');
    expect(submitButton).toBeDisabled();
    const input = await screen.findByRole('textbox');
    fireEvent.change(input, {target: {value: '1'}})
    await waitFor(() => expect(submitButton).not.toBeDisabled());
    expect(input).toHaveValue('1')
    // Click button
    fireEvent.click(submitButton);
    await waitFor(() => expect(number).toEqual('1'));
    cleanup();
  })
})
