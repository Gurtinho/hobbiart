/*
  Warnings:

  - You are about to drop the `Hobbie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hobbie";

-- CreateTable
CREATE TABLE "hobbies" (
    "id" TEXT NOT NULL,
    "text" TEXT,
    "image" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hobbies_pkey" PRIMARY KEY ("id")
);
