import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { email, password }) => {
      // 유저가 있는지 확인
      const user = await client.user.findFirst({ where: { email } });
      if (!user) {
        return {
          ok: false,
          error: "해당 사용자가 존재하지 않습니다.",
        };
      }

      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) {
        return {
          ok: false,
          error: "비밀번호가 맞지 않습니다.",
        };
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
