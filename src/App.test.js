import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql',
  cache: new InMemoryCache()
});

test('that the header contains a heading with the name Carpincho Store in it', () => {
  render(<ApolloProvider client={client}><App /></ApolloProvider>)
  const element = screen.getByRole('heading', {name: 'Carpincho Store'});
  expect(element).toBeInTheDocument()
})

test('that the header starts with the button on Login', () => {
  render(<ApolloProvider client={client}><App /></ApolloProvider>)
  const element = screen.getByRole('button', {name: 'Login'});
  expect(element).toBeInTheDocument()
})

test('that the Login button toggles back and forth between Logout and Login when clicking it', () => {
  render(<ApolloProvider client={client}><App /></ApolloProvider>)
  const element = screen.getByRole('button', {name: 'Login'});
  fireEvent.click(element);
  expect(element).toHaveTextContent('Logout')
  fireEvent.click(element);
  expect(element).toHaveTextContent('Login')
})

test('that a delete button shows up inside each card whenever the user logs in', async () => {
  render(<ApolloProvider client={client}><App /></ApolloProvider>)
  const element = screen.getByRole('button', {name: 'Login'});
  fireEvent.click(element);
  const imgElements = await screen.findAllByRole('img');
  const cardElement = screen.getAllByRole('button', {name: 'X'})
  expect(cardElement).toHaveLength(imgElements.length)
})