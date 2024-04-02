import connect from "@/helper/db";
import { createUser } from "@/services/user";
import type { NextApiRequest, NextApiResponse } from "next";

connect();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body?.firstName || !req.body?.lastName || !req.body?.email) {
    res.status(400).json("firstName, lastName, email is missing");
  }
  const { firstName, lastName, email, age } = req.body;
  try {
    const user = await createUser(firstName, lastName, email, age);
    res.status(200).json({ message: "User successfully created" });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};
export default handler;
