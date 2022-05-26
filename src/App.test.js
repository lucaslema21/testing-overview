import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color and text', () => {
  render(<App />)
  const buttonElement = screen.getByRole('button', {name: 'Change to blue'})
  expect(buttonElement).toHaveStyle(`
    background-color: red;
  `)
})

test('button turns blue when clicked and changes text accordingly', () => {
  render(<App />)
  const buttonElement = screen.getByRole('button', {name: 'Change to blue'})
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle(`
    background-color: blue;
  `)
  expect(buttonElement).toHaveTextContent('Change to red')
})
