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
        lotNoAddr,
        roadNmAddr,
        remarks,
        registeredUser,
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
        console.log(`수영장 등록 여부 : ${isPool}`);
        if (isPool) {
          throw new Error("이미 등록된 수영장입니다.");
          // 관리자 페이지 작업할 때 화면에 표시해야 함.
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
            lotNoAddr,
            roadNmAddr,
            remarks,
            registeredUser,
            isShow: false, // admin에서 확인 후 값을 true로 변경
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
