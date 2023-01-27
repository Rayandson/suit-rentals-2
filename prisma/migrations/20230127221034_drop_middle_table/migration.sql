/*
  Warnings:

  - You are about to drop the `rentals_suits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rentals_suits" DROP CONSTRAINT "rentals_suits_fk0";

-- DropForeignKey
ALTER TABLE "rentals_suits" DROP CONSTRAINT "rentals_suits_fk1";

-- DropTable
DROP TABLE "rentals_suits";

-- CreateTable
CREATE TABLE "_rentalsTosuits" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_rentalsTosuits_AB_unique" ON "_rentalsTosuits"("A", "B");

-- CreateIndex
CREATE INDEX "_rentalsTosuits_B_index" ON "_rentalsTosuits"("B");

-- AddForeignKey
ALTER TABLE "_rentalsTosuits" ADD CONSTRAINT "_rentalsTosuits_A_fkey" FOREIGN KEY ("A") REFERENCES "rentals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_rentalsTosuits" ADD CONSTRAINT "_rentalsTosuits_B_fkey" FOREIGN KEY ("B") REFERENCES "suits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
