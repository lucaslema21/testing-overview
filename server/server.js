const express = require('express');
const cors = require('cors');
const fs = require('fs');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const app = express();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

  type Carpincho {
    id: Int
    image: String
    name: String
  }

  type CarpinchoList {
    data: [Carpincho!]
  }

  type Query {
    carpinchos: CarpinchoList
  }
`);

class CarpinchoList {
    constructor() {
        const carpinchos = fs.readFileSync('./carpinchos.json', 'utf-8');
        const carpinchoData = JSON.parse(carpinchos);
        this.data = carpinchoData.data
    }
}

// The root provides the top-level API endpoints
var root = {
  carpinchos: () => {
      return new CarpinchoList()
  },
}

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(3030);
console.log('Running a GraphQL API server at localhost:3030/graphql');