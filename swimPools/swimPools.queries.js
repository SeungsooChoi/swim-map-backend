import client from "../client";

export default {
  Query: {
    swimPools: () => client.swimPool.findMany(),
    swimPool: (_, { id }) => client.swimPool.findUnique({ where: { id } }),
  },
};
