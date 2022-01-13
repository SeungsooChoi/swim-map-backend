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
  },
};
