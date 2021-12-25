import client from "../../client";

export default {
  Mutation: {
    updateSwimPool: (
      _,
      {
        id,
        sigunguName,
        sigunguCode,
        name,
        inOutDoorDivName,
        manageMainName,
        contactNo,
        homepageAddr,
        divingLength,
        divingWidth,
        divingDepth,
        regPoolLength,
        regPoolWidth,
        regPoolLaneCnt,
        irregPoolLength,
        irregPoolWidth,
        irregPoolLaneCnt,
        seatCnt,
        personCnt,
        latitude,
        longitude,
        remarks,
      }
    ) => {
      const updateSwimPool = client.swimPool.update({
        where: {
          id,
        },
        data: {
          sigunguName,
          sigunguCode,
          name,
          inOutDoorDivName,
          manageMainName,
          contactNo,
          homepageAddr,
          divingLength,
          divingWidth,
          divingDepth,
          regPoolLength,
          regPoolWidth,
          regPoolLaneCnt,
          irregPoolLength,
          irregPoolWidth,
          irregPoolLaneCnt,
          seatCnt,
          personCnt,
          latitude,
          longitude,
          remarks,
        },
      });

      console.log(updateSwimPool);
    },
  },
};
