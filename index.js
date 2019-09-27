const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const resolvers = {
  hello: () => 'Hello, world!'
}

const query = '{ hello }'

graphql(schema, query, resolvers).then(response => {
  console.info(
    '%cResponse is',
    'background-color:blue;color:white;padding:3px 6px;border-radius:2px;',
    response
  )

  if (response && response.data && response.data.hello && response.data.hello === 'Hello, world!') {
    console.info(
      '%cSuccess!',
      'background-color:green;color:white;padding:3px 6px;border-radius:2px;',
      'Graphql runs in browser with no problem!',
    )
  } else {
    console.info(
      '%cError!',
      'background-color:red;color:white;padding:3px 6px;border-radius:2px;'
    )
  }
})
