import { gql } from "apollo-server";

/**
 * User
 * id : id
 * firstName : 이름
 * lastName : 이름(성)
 * username : 유저 이름(닉네임)
 * email : 이메일
 * createdAt : 생성날짜
 * updatedAt : 수정날짜
 */
export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    seeProfile: User
  }
`;
