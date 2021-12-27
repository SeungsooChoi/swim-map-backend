import { gql } from "apollo-server";

export default gql`
  type updateSwimPoolResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    updateSwimPool(
      id: Int!
      sigunguName: String
      sigunguCode: String
      name: String!
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
    ): updateSwimPoolResult!
  }
`;
