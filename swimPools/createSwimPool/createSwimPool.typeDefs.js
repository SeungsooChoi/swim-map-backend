import { gql } from "apollo-server";

export default gql`
  type createSwimPoolResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createSwimPool(
      sigunguName: String
      sigunguCode: String
      name: String!
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
      lotNoAddr: String
      roadNmAddr: String
      remarks: String
      registeredUser: String
    ): createSwimPoolResult!
  }
`;
