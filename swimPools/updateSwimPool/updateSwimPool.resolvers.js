import client from "../../client";

export default {
  Mutation: {
    updateSwimPool: async (
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
        address,
        remarks,
      }
    ) => {
      const updateSwimPool = await client.swimPool.update({
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
          address,
          remarks,
        },
      });

      console.log(updateSwimPool);
    },
  },
};
