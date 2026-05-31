-- CreateEnum
CREATE TYPE "QrType" AS ENUM ('STATIC', 'DYNAMIC');

-- CreateTable
CREATE TABLE "qr_codes" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "type" "QrType" NOT NULL,
    "rawData" TEXT NOT NULL,
    "imageUrl" TEXT,
    "amount" DECIMAL(65,30),
    "reference" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qr_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "qr_codes_reference_key" ON "qr_codes"("reference");

-- CreateIndex
CREATE INDEX "qr_codes_merchantId_idx" ON "qr_codes"("merchantId");
