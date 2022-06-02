import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { gql } from '@apollo/client';

const GET_CARPINCHOS = gql`
  {
    carpinchos {
      data {
        id
        name
        image
      }
    }
  }
`;

const mocks = [
  {
    request: {
      query: GET_CARPINCHOS,
    },
    result: {
      "data": {
        "carpinchos": {
          "data": [
              {
                  "id": 1,
                  "image": "https://cdn.pixabay.com/photo/2019/05/05/14/02/capybara-4180603_960_720.jpg",
                  "name": "Tito"
              },
              {
                  "id": 2,
                  "image": "https://www.collinsdictionary.com/images/full/capybara_346252388.jpg",
                  "name": "Roque"
              },
          ]
        }
      }
    }
  },
]

test('that the header contains a heading with the name Carpincho Store in it', () => {
  render(<MockedProvider mocks={mocks}><App /></MockedProvider>)
  const element = screen.getByRole('heading', {name: 'Carpincho Store'});
  expect(element).toBeInTheDocument()
})

test('that the header starts with the button on Login', () => {
  render(<MockedProvider mocks={mocks}><App /></MockedProvider>)
  const element = screen.getByRole('button', {name: 'Login'});
  expect(element).toBeInTheDocument()
})

test('that the Login button toggles back and forth between Logout and Login when clicking it', () => {
  render(<MockedProvider mocks={mocks}><App /></MockedProvider>)
  const element = screen.getByRole('button', {name: 'Login'});
  fireEvent.click(element);
  expect(element).toHaveTextContent('Logout')
  fireEvent.click(element);
  expect(element).toHaveTextContent('Login')
})

test('that a delete button shows up inside each card whenever the user logs in', async () => {
  render(<MockedProvider mocks={mocks}><App /></MockedProvider>)
  const element = screen.getByRole('button', {name: 'Login'});
  fireEvent.click(element);
  const imgElements = await screen.findAllByRole('img');
  const cardElement = screen.getAllByRole('button', {name: 'X'})
  expect(cardElement).toHaveLength(imgElements.length)
})