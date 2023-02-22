-- CreateEnum
CREATE TYPE "EnumRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "EnumType" AS ENUM ('Fourgon', 'Van');

-- CreateEnum
CREATE TYPE "EnumGearType" AS ENUM ('Manuelle', 'Automatique');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "EnumRole" NOT NULL DEFAULT 'USER',
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Truck" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TruckType" (
    "id" TEXT NOT NULL,
    "name" "EnumType" NOT NULL,

    CONSTRAINT "TruckType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EngineType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EngineType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GearType" (
    "id" TEXT NOT NULL,
    "name" "EnumGearType" NOT NULL,

    CONSTRAINT "GearType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TruckType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TruckEngineType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TruckGearType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TruckOption" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EngineType_name_key" ON "EngineType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "GearType_name_key" ON "GearType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_TruckType_AB_unique" ON "_TruckType"("A", "B");

-- CreateIndex
CREATE INDEX "_TruckType_B_index" ON "_TruckType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TruckEngineType_AB_unique" ON "_TruckEngineType"("A", "B");

-- CreateIndex
CREATE INDEX "_TruckEngineType_B_index" ON "_TruckEngineType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TruckGearType_AB_unique" ON "_TruckGearType"("A", "B");

-- CreateIndex
CREATE INDEX "_TruckGearType_B_index" ON "_TruckGearType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TruckOption_AB_unique" ON "_TruckOption"("A", "B");

-- CreateIndex
CREATE INDEX "_TruckOption_B_index" ON "_TruckOption"("B");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckType" ADD CONSTRAINT "_TruckType_A_fkey" FOREIGN KEY ("A") REFERENCES "Truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckType" ADD CONSTRAINT "_TruckType_B_fkey" FOREIGN KEY ("B") REFERENCES "TruckType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckEngineType" ADD CONSTRAINT "_TruckEngineType_A_fkey" FOREIGN KEY ("A") REFERENCES "EngineType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckEngineType" ADD CONSTRAINT "_TruckEngineType_B_fkey" FOREIGN KEY ("B") REFERENCES "Truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckGearType" ADD CONSTRAINT "_TruckGearType_A_fkey" FOREIGN KEY ("A") REFERENCES "GearType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckGearType" ADD CONSTRAINT "_TruckGearType_B_fkey" FOREIGN KEY ("B") REFERENCES "Truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckOption" ADD CONSTRAINT "_TruckOption_A_fkey" FOREIGN KEY ("A") REFERENCES "Option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckOption" ADD CONSTRAINT "_TruckOption_B_fkey" FOREIGN KEY ("B") REFERENCES "Truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
