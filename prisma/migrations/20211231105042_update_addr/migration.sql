/*
  Warnings:

  - You are about to drop the column `address` on the `SwimPool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SwimPool" DROP COLUMN "address",
ADD COLUMN     "lotNoAddr" TEXT,
ADD COLUMN     "roadNmAddr" TEXT;
