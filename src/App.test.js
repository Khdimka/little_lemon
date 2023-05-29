import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router } from 'react-router-dom';



test('renders submit button with "Reserve a table" text', () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const submitButton = screen.getByRole('button', { name: /Reserve a table/i });
  expect(submitButton).toBeInTheDocument();
});

test('selecting date "2023-02-05" shows "17:00" option in time select', async () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(dateInput, { target: { value: '2023-02-05' } });

  // Replace the following line with the actual API call in your application
  const availableTimes = ['17:00'];

  // Wait for the available times to be updated
  await screen.findByText('17:00');

  const timeSelect = screen.getByLabelText(/time/i);
  availableTimes.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
    expect(timeSelect).toContainElement(screen.getByText(time));
  });
});
