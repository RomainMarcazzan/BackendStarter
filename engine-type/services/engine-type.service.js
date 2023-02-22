import { prisma } from '../../utils/prisma.js';

export const createEngineType = async (data) => {
  const engineType = await prisma.engineType.create({
    data: data,
  });
  return engineType;
};

export const getAllEngineTypes = async () => {
  const engineTypes = await prisma.engineType.findMany();
  return engineTypes;
};
