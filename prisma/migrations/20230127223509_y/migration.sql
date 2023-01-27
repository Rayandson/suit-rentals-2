/*
  Warnings:

  - You are about to drop the `_rentalsTosuits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_rentalsTosuits" DROP CONSTRAINT "_rentalsTosuits_A_fkey";

-- DropForeignKey
ALTER TABLE "_rentalsTosuits" DROP CONSTRAINT "_rentalsTosuits_B_fkey";

-- DropTable
DROP TABLE "_rentalsTosuits";

-- CreateTable
CREATE TABLE "rentals_suits" (
    "id" SERIAL NOT NULL,
    "rental_id" INTEGER NOT NULL,
    "suit_id" INTEGER NOT NULL,

    CONSTRAINT "rentals_suits_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rentals_suits" ADD CONSTRAINT "rentals_suits_fk0" FOREIGN KEY ("rental_id") REFERENCES "rentals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rentals_suits" ADD CONSTRAINT "rentals_suits_fk1" FOREIGN KEY ("suit_id") REFERENCES "suits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
