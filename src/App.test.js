import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('that the header contains a heading with the name Carpincho Store in it', () => {
  render(<App />)
  const element = screen.getByRole('heading', {name: 'Carpincho Store'});
  expect(element).toBeInTheDocument()
})

test('that the header starts with the button on Login', () => {
  render(<App />)
  const element = screen.getByRole('button', {name: 'Login'});
  expect(element).toBeInTheDocument()
})

test('that the Login button toggles back and forth between Logout and Login when clicking it', () => {
  render(<App />)
  const element = screen.getByRole('button', {name: 'Login'});
  fireEvent.click(element);
  expect(element).toHaveTextContent('Logout')
  fireEvent.click(element);
  expect(element).toHaveTextContent('Login')
})

test('that a delete button shows up inside each card whenever the user logs in', async () => {
  render(<App />)
  const element = screen.getByRole('button', {name: 'Login'});
  fireEvent.click(element);
  const imgElements = await screen.findAllByRole('img');
  const cardElement = screen.getAllByRole('button', {name: 'X'})
  expect(cardElement).toHaveLength(imgElements.length)
})