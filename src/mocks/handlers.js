import {rest} from 'msw';

export const handlers = [
    rest.get('http://localhost:3030/carpinchos', (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    "data":                 [
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
            )
        )
    })
]