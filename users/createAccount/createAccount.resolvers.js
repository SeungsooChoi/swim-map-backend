import client from "../../client";
import bcrypt, { hash } from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        // 유저 있는지 검사
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser) {
          throw new Error("이미 존재하는 이름 또는 이메일 입니다.");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await client.user.create({
          data: {
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
          },
        });
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
