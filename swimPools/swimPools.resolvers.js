import client from "../client";

export default {
  Query: {
    swimPools: async () => await client.swimPool.findMany(),
    swimPool: async (_, { id }) =>
      await client.swimPool.findUnique({ where: { id } }),
  },
};
