import { gql } from "apollo-server";

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
 * address : 주소
 * remarks : 비고사항
 * registeredUser : 등록한 유저(있을경우)
 */
export default gql`
  type SwimPool {
    id: Int!
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
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    swimPools: [SwimPool]
    swimPool(id: Int!): SwimPool
  }
`;
