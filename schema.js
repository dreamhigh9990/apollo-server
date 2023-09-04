type Product {
  id: ID!
  name: String!
  price: Float!
  description: String!
}

type Query {
  products: [Product!]!
}
