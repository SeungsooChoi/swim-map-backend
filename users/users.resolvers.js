import client from "../client";

export default {
  Query: {
    seeProfile: async (_, args, { loggedInUser }) => {
      console.log(loggedInUser);
      const user = await client.user.findUnique({
        where: { id: loggedInUser.id },
      });
      return user;
    },
    getUsers: async (_, args) => {
      try {
        const users = await client.user.findMany();
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
