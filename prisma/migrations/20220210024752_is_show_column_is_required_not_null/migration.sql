/*
  Warnings:

  - Made the column `isShow` on table `SwimPool` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SwimPool" ALTER COLUMN "isShow" SET NOT NULL;
