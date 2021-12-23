import { ApolloServer, gql } from "apollo-server";

/**
 * SwimPool
 * sigunguName : 시군구명
 * sigunguCode : 시군구코드
 * name : 시설명
 * inOutDoorDivName : 실내외구분명
 * manageMainName : 관리주체명
 * contactNo : 연락처
 * homepageAddr : 홈페이지 주소
 * divingLength : 다이빙장 길이(m)
 * divingWidth : 다이빙장 폭(m)
 * divingDepth : 다이빙장 깊이
 * regPoolLength : 정규 경영장 길이(m)
 * regPoolWidth : 정규 경영장 폭(m)
 * regPoolLaneCnt : 정규 경영장 레인수
 * irregPoolLength : 비정규 경영장 길이(m)
 * irregPoolWidth : 비정규 경영장 폭(m)
 * irregPoolLaneCnt : 비정규 경영장 레인수
 * seatCnt : 관람석 좌석수
 * personCnt : 수용인원수(명)
 * latitude : 위도
 * longitude : 경도
 * remarks : 비고사항
 */
const typeDefs = gql`
  type SwimPool {
    id: Int
    sigunguName: String
    sigunguCode: String
    name: String
    inOutDoorDivName: String
    manageMainName: String
    contactNo: String
    homepageAddr: String
    divingLength: Int
    divingWidth: Int
    divingDepth: Int
    regPoolLength: Int
    regPoolWidth: Int
    regPoolLaneCnt: Int
    irregPoolLength: Int
    irregPoolWidth: Int
    irregPoolLaneCnt: Int
    seatCnt: Int
    personCnt: Int
    latitude: String
    longitude: String
    remarks: String
  }

  type Query {
    swimPools: [SwimPool]
    # pool: Pool
  }

  type Mutation {
    createSwimPool(name: String!): Boolean
    deleteSwimPool(name: String!): Boolean
  }
`;

const resolvers = {
  Query: {
    swimPools: () => [],
    // pool: () => ({ name }),
  },
  Mutation: {
    createSwimPool: (_, { name }) => {
      console.log(name);
      return true;
    },
    deleteSwimPool: (_, { name }) => {
      console.log(name);
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

/**
 * return : url, server instance
 */
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
