import { prisma } from "../../utils/prisma.js";

export const createOption = async (data) => {
  const option = await prisma.option.create({ data });
  return option;
};

export const getAllOptions = async () => {
  const options = await prisma.option.findMany();
  return options;
};

export const getOptionById = async (id) => {
  const option = await prisma.option.findUnique({ where: { id } });
  return option;
};

export const updateOption = async (data, id) => {
  const option = await prisma.option.update({ where: { id }, data });
  return option;
};

export const deleteOption = async (id) => {
  const option = await prisma.option.delete({ where: { id } });
  return option;
};
