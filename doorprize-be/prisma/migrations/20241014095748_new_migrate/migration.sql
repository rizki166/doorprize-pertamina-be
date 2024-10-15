/*
  Warnings:

  - You are about to drop the column `winnercar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `winnerkulkas` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `winnermotor` on the `User` table. All the data in the column will be lost.
  - Added the required column `winner` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "winnercar",
DROP COLUMN "winnerkulkas",
DROP COLUMN "winnermotor",
ADD COLUMN     "winner" BOOLEAN NOT NULL;
