import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  const buttonElement = screen.getByRole('button', {name: 'Change to blue'})
  expect(buttonElement).toHaveStyle(`
    background-color: red;
  `)
})

test('button has correct initial text', () => {

})

test('button turns blue when clicked', () => {

})
