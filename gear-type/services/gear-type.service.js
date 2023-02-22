import { prisma } from '../../utils/prisma.js';

export const createGearType = async (data) => {
  const gearType = await prisma.gearType.create({
    data: data,
  });
  return gearType;
};

export const getAllGearTypes = async () => {
  const gearTypes = await prisma.gearType.findMany();
  return gearTypes;
};
