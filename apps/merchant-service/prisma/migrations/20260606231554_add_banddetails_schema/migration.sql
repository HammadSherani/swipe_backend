/*
  Warnings:

  - You are about to drop the column `isVerified` on the `merchants` table. All the data in the column will be lost.
  - The `businessType` column on the `merchants` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `amount` on the `payment_links` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(12,2)`.
  - You are about to alter the column `amount` on the `qr_codes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(12,2)`.
  - A unique constraint covering the columns `[bvn]` on the table `merchants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nin]` on the table `merchants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cacNumber]` on the table `merchants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tin]` on the table `merchants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pagaReference]` on the table `merchants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[paystackSubaccountCode]` on the table `merchants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('PENDING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "KycLevel" AS ENUM ('TIER_1', 'TIER_2', 'TIER_3');

-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('SOLE_PROPRIETORSHIP', 'REGISTERED_COMPANY', 'INDIVIDUAL_TRADER');

-- DropForeignKey
ALTER TABLE "payment_links" DROP CONSTRAINT "payment_links_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "qr_codes" DROP CONSTRAINT "qr_codes_merchantId_fkey";

-- AlterTable
ALTER TABLE "merchants" DROP COLUMN "isVerified",
ADD COLUMN     "bvn" TEXT,
ADD COLUMN     "cacNumber" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "kycLevel" "KycLevel" NOT NULL DEFAULT 'TIER_1',
ADD COLUMN     "kycStatus" "KycStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "nin" TEXT,
ADD COLUMN     "paystackSubaccountCode" TEXT,
ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "tin" TEXT,
DROP COLUMN "businessType",
ADD COLUMN     "businessType" "BusinessType" NOT NULL DEFAULT 'SOLE_PROPRIETORSHIP';

-- AlterTable
ALTER TABLE "payment_links" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "qr_codes" ADD COLUMN     "qrImageUrl" TEXT,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(12,2);

-- CreateTable
CREATE TABLE "merchant_virtual_accounts" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "merchant_virtual_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "merchant_virtual_accounts_accountNumber_key" ON "merchant_virtual_accounts"("accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_bvn_key" ON "merchants"("bvn");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_nin_key" ON "merchants"("nin");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_cacNumber_key" ON "merchants"("cacNumber");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_tin_key" ON "merchants"("tin");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_pagaReference_key" ON "merchants"("pagaReference");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_paystackSubaccountCode_key" ON "merchants"("paystackSubaccountCode");

-- AddForeignKey
ALTER TABLE "merchant_virtual_accounts" ADD CONSTRAINT "merchant_virtual_accounts_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qr_codes" ADD CONSTRAINT "qr_codes_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_links" ADD CONSTRAINT "payment_links_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
