import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes,updateTimes } from './components/BookingPage';

test('initializeTimes returns the expected array of available times', () => {
  const expected = ['5:00 pm','6:00 pm','7:00 pm','8:00 pm','9:00 pm','10:00 pm'];
  const result = initializeTimes();
  expect(result).toEqual(expected);
});


test("updateTimes returns the same value that is provided",() =>{
  const initialState = ['5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm'];
  const action = { type: 'remove' };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
})
