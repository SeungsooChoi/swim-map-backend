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
      name: String
      inOutDoorDivName: String
      manageMainName: String
      contactNo: String
      homepageAddr: String
      divingLength: Float
      divingWidth: Float
      divingDepth: Float
      regPoolLength: Float
      regPoolWidth: Float
      regPoolLaneCnt: Float
      irregPoolLength: Float
      irregPoolWidth: Float
      irregPoolLaneCnt: Float
      seatCnt: Int
      personCnt: Int
      latitude: String
      longitude: String
      address: String
      remarks: String
    ): updateSwimPoolResult!
  }
`;
