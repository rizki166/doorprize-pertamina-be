import prisma from "../db";
import db from "../db";
import { registerValidation } from "../lib/validation/register";
import { IRegister } from "../type/app";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async () => {
  try {
    const getUsers = await db.user.findMany();
    return getUsers;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id: number) => {
  return await db.user.findFirst({
    where: {
      id,
    },
  });
};
export const createUser = async (name: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
      },
    });
    return user;
  } catch (error) {
    console.error("Error during registration:", error);
    return null;
  }
};

export const updateUser = async (id: number, payload: IRegister) => {
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...payload,
      },
    });
    return user;
  } catch (error) {
    console.error("Error during registration:", error);
    return null;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return user;
  } catch (error) {
    console.error("Error during registration:", error);
    return null;
  }
};

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("User or password is not valid");
  }
  console.log("user", user);

  const isMatch = await bcrypt.compare(password, user.password as string);

  if (!isMatch) {
    throw new Error("User or password is not valid");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    `${process.env.SECRET_KEY}`,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

export const deleteUser = async (id: number) => {
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    return deleteUser;
  } catch (error) {
    console.log(error);
  }
};
