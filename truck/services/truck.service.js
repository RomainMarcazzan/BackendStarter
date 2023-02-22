import { prisma } from "../../utils/prisma.js";

export const createTruck = async (data) => {
  const truck = await prisma.truck.create({
    data,
  });
  return truck;
};

export const getAllTrucks = async () => {
  const trucks = await prisma.truck.findMany();
  return trucks;
};

export const getTruckById = async (id) => {
  const truck = await prisma.truck.findUnique({
    where: { id },
  });
  return truck;
};
export const updateTruck = async (data, id) => {
  const truck = await prisma.truck.update({
    where: { id },
    data,
  });
  return truck;
};

export const deleteTruck = async (id) => {
  const truck = await prisma.truck.delete({
    where: { id },
  });
  return truck;
};

export const getTruckByType = async (type) => {
  const truck = await prisma.truck.findMany({
    where: {
      type: {
        equals: type,
      },
    },
  });
  return truck;
};

export const addOptionToTruck = async (optionId, truckId) => {
  const truck = await prisma.truck.update({
    where: {
      id: truckId,
    },
    data: {
      options: {
        connect: {
          id: optionId,
        },
      },
    },
  });
  return truck;
};

export const removeOptionFromTruck = async (optionId, truckId) => {
  const truck = await prisma.truck.update({
    where: {
      id: truckId,
    },
    data: {
      options: {
        disconnect: {
          id: optionId,
        },
      },
    },
  });
  return truck;
};

export const getOptionsByTruckId = async (truckId) => {
  const options = await prisma.option.findMany({
    where: {
      truckId: {
        equals: truckId,
      },
    },
  });
  return options;
};
