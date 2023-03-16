import { render, screen } from '@testing-library/react';
import App from './App';
import ResForm from './components/pages/ResForm';
import { initializeTimes, updateTimes } from './App';
import Reservations from './components/pages/Reservations';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { fetchAPI, submitAPI } from './temp';

test('Renders label for first form field (date)', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>);
  fireEvent.click(screen.getAllByText("Reservations")[0]);
  const linkElement = screen.getByText("Choose date");
  expect(linkElement).toBeInTheDocument();
});

test("initializeTimes function returns correct output", () => {
  const actual = initializeTimes();
  const day = new Date();
  const expected = fetchAPI(day);

  expect(actual).toEqual(expected);
});

test("Validate updateTimes returns same value provided in state", () => {
  const prevState = initializeTimes();
  const day = new Date();
  const actual = updateTimes(prevState, day);
  const expected = fetchAPI(day);

  expect(actual).toEqual(expected);
})