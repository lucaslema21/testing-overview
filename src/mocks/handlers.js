// src/mocks/handlers.js
import { graphql } from 'msw'

export const handlers = [
    graphql.query('carpinchos', (_, res, ctx) => {
        return res(
          ctx.data({
            carpinchos: {
              data: [
                {
                    "id": 1,
                    "image": "https://cdn.pixabay.com/photo/2019/05/05/14/02/capybara-4180603_960_720.jpg",
                    "name": "Tito",
                    "__typename": "Carpincho"
                },
                {
                    "id": 2,
                    "image": "https://www.collinsdictionary.com/images/full/capybara_346252388.jpg",
                    "name": "Roque",
                    "__typename": "Carpincho"
                },
              ],
              __typename: 'CarpinchoList'
            },
          }),
        )
      }),
  ]