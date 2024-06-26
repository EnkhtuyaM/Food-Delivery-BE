import { UserModel } from "@/models/user.schema";
import { generateJwtToken } from "../utils/generate-token";

export const loginService = async (email: string, password: string) => {
  if (email == "bla@gmail.com" && password == "bla") {
    const userInfo = {
      email: email,
      name: "John Doe",
    };
    return generateJwtToken(userInfo);
  } else {
    throw new Error("Invalid credentials");
  }
};

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  age: number
) => {
  const createUser = UserModel.create({ firstName, lastName, email, age });
  return createUser;
};
