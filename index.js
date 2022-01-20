require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { getUser } from "./users/users.utils";

const PORT = process.env.PORT;
const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return { loggedInUser: await getUser(req.headers.authorization) };
  },
});

/**
 * listen()은 Promise를 리턴하고 다음과 같은 properties를 갖고있다.
 * url, server(서버 인스턴스)
 */
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
