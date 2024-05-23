import { Request, Response } from "express";
import authSchema from "../schema/auth";

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  // Check input data
  if (!firstName || !lastName || !email || !password) {
    res.json({
      message: "Please input all fields",
    });
    return;
  }

  // Check email is already taken
  const alreadyTaken = await authSchema.findOne({ email: email });
  if (alreadyTaken) {
    res.json({
      message: "The email is already taken",
    });
    return;
  }

  // hash password

  res.json({
    message: "Hello",
  });
};
