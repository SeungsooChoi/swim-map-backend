import client from "../client";

export default {
  Mutation: {
    createSwimPool: (_, { name }) =>
      client.swimPool.create({
        data: {
          name,
        },
      }),
    deleteSwimPool: (_, { id }) => client.swimPool.delete({ where: { id } }),
  },
};
