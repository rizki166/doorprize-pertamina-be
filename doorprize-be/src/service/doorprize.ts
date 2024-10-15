import prisma from "../db";

export const getDoorprize = async () => {
  try {
    const getDoorprize = await prisma.doorprize.findMany();
    return getDoorprize;
  } catch (error) {
    console.log(error);
  }
};
export const createDoorprize = async (name: string) => {
  try {
    const createDoorprize = await prisma.doorprize.create({
      data: {
        name,
      },
    });
    return createDoorprize;
  } catch (error) {
    console.log(error);
  }
};


export const updateDoorprize = async (id: number, name: string) => {
  try {
    const updateDoorprize = await prisma.doorprize.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return updateDoorprize;
  } catch (error) {
    console.log(error);
  }
}
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
}