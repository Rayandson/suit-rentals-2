-- CreateTable
CREATE TABLE "rentals" (
    "id" SERIAL NOT NULL,
    "renter_id" INTEGER NOT NULL,
    "rental_date" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-26 11:53:59.879446'::timestamp without time zone,
    "return_date" TIMESTAMP(6) NOT NULL DEFAULT (now() + '3 days'::interval),
    "is_returned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "rentals_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "renters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,

    CONSTRAINT "renters_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "sizes_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suits" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "size_id" INTEGER NOT NULL,

    CONSTRAINT "suits_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rentals_suits" (
    "id" SERIAL NOT NULL,
    "rental_id" INTEGER NOT NULL,
    "suit_id" INTEGER NOT NULL,

    CONSTRAINT "rentals_suits_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "renters_cpf_key" ON "renters"("cpf");

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_fk0" FOREIGN KEY ("renter_id") REFERENCES "renters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "suits" ADD CONSTRAINT "suits_fk0" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rentals_suits" ADD CONSTRAINT "rentals_suits_fk0" FOREIGN KEY ("rental_id") REFERENCES "rentals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rentals_suits" ADD CONSTRAINT "rentals_suits_fk1" FOREIGN KEY ("suit_id") REFERENCES "suits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
