-- AlterTable
ALTER TABLE "merchants" ADD COLUMN     "addressCity" TEXT NOT NULL DEFAULT 'Lagos',
ADD COLUMN     "addressCountry" TEXT NOT NULL DEFAULT 'Nigeria',
ADD COLUMN     "addressLine1" TEXT NOT NULL DEFAULT 'Not Provided',
ADD COLUMN     "addressLine2" TEXT,
ADD COLUMN     "addressState" TEXT NOT NULL DEFAULT 'Lagos',
ADD COLUMN     "addressZip" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "ownerDob" TIMESTAMP(3),
ADD COLUMN     "pagaReference" TEXT;
