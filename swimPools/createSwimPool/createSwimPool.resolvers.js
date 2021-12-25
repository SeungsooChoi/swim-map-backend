import client from "../../client";

export default {
  Mutation: {
    createSwimPool: (_, { name }) => {
      // 중복으로 올리는 경우를 체크.
      // 이름으로 중복검사를 우선 하지만 최종적으로 관리자가 등록하기전에 체크해야 함.
      try {
        const existingPool = client.swimPool.findFirst({
          where: {
            name,
          },
        });

        if (existingPool) {
          throw new Error("이미 등록된 수영장입니다.");
        }
        return client.swimPool.create({
          data: {
            name,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
