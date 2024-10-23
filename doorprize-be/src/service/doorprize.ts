import prisma from "../db";
import { IDoorprize } from "../type/app";

export const getDoorprize = async () => {
  try {
    const getDoorprize = await prisma.doorprize.findMany();
    return getDoorprize;
  } catch (error) {
    console.log(error);
  }
};
export const createDoorprize = async (payload: IDoorprize) => {
  try {
    console.log("Payload received:", payload); // Debugging point 8

    const createDoorprize = await prisma.doorprize.create({
      data: {
        name: payload.name,
        image: payload.image || "",
      },
    });

    console.log("Doorprize created:", createDoorprize); // Debugging point 9
    return createDoorprize;
  } catch (error) {
    console.error("Error creating doorprize:", error); // Debugging point 10
    throw error;
  }
};

export const updateDoorprize = async (
  id: number,
  payload: IDoorprize,
  files: { [fieldname: string]: Express.Multer.File[] }
) => {
  try {
    const updateDoorprize = await prisma.doorprize.update({
      where: {
        id,
      },
      data: {
        ...payload,
        image: files.image ? files.image[0].filename : "",
      },
    });
    return updateDoorprize;
  } catch (error) {
    console.log(error);
  }
};
export const deleteDoorprize = async (id: number) => {
  try {
    const deleteDoorprize = await prisma.doorprize.delete({
      where: {
        id,
      },
    });
    return deleteDoorprize;
  } catch (error) {
    console.log(error);
  }
};
