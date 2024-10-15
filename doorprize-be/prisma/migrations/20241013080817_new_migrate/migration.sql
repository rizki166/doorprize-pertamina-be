/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Follow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Thread` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ThreadImage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnercar` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnerkulkas` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnermobil` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnermotor` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followingId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_threadId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Thread" DROP CONSTRAINT "Thread_threadId_fkey";

-- DropForeignKey
ALTER TABLE "Thread" DROP CONSTRAINT "Thread_userId_fkey";

-- DropForeignKey
ALTER TABLE "ThreadImage" DROP CONSTRAINT "ThreadImage_threadId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "fullname",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "winnercar" BOOLEAN NOT NULL,
ADD COLUMN     "winnerkulkas" BOOLEAN NOT NULL,
ADD COLUMN     "winnermobil" BOOLEAN NOT NULL,
ADD COLUMN     "winnermotor" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Follow";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "Thread";

-- DropTable
DROP TABLE "ThreadImage";

-- CreateTable
CREATE TABLE "Doorprize" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Doorprize_pkey" PRIMARY KEY ("id")
);
