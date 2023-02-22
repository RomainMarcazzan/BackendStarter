import { prisma } from '../../utils/prisma.js';

export const createTruckType = async (data) => {
  const truckType = await prisma.truckType.create({
    data: data,
  });
  return truckType;
};

export const getAllTruckTypes = async () => {
  const truckTypes = await prisma.truckType.findMany();
  return truckTypes;
};
