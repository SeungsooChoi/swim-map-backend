import client from "../../client";

export default {
  Mutation: {
    createSwimPool: async (
      _,
      {
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
      // 중복으로 올리는 경우를 체크.
      // 이름으로 중복검사를 우선 하지만 최종적으로 관리자가 등록하기전에 체크해야 함.
      try {
        const isPool = await client.swimPool.findFirst({
          where: {
            name,
          },
        });
        console.log(isPool);
        if (isPool) {
          throw new Error("이미 등록된 수영장입니다.");
        }
        await client.swimPool.create({
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

        return {
          ok: true,
        };
      } catch (error) {
        console.log(error);
        return {
          ok: false,
          error: error,
        };
      }
    },
  },
};
