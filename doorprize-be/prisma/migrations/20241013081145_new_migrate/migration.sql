/*
  Warnings:

  - You are about to drop the column `winnermobil` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Doorprize" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "winnermobil",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "username" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "winnercar" DROP NOT NULL,
ALTER COLUMN "winnerkulkas" DROP NOT NULL,
ALTER COLUMN "winnermotor" DROP NOT NULL;
