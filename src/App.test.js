import { render, screen } from '@testing-library/react';
import App from './App';
import ResForm from './components/pages/ResForm';
import initializeTimes from './App';
import Reservations from './components/pages/Reservations';

test('Renders label for first form field (date)', () => {
  render(<ResForm />);
  const linkElement = screen.getByText("Choose date");
  expect(linkElement).toBeInTheDocument();
});

test("initializeTimes function returns correct output", () => {
  render(<App/>);
  render(<Reservations/>);
  render(<ResForm/>);

  const actual = initializeTimes();
  const expected = [
    {label: "17:00", value: "17:00"},
    {label: "18:00", value: "18:00"},
    {label: "19:00", value: "19:00"},
    {label: "20:00", value: "20:00"},
    {label: "21:00", value: "21:00"},
    {label: "22:00", value: "22:00"}
  ];

  expect(actual).toEqual(expected);
});