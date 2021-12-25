import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createSwimPool(name: String!): SwimPool
  }
`;
