/*
  Warnings:

  - Made the column `article_level` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "article_level" SET NOT NULL;
