-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('PENDING', 'INITIATED', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "kycStatus" "KycStatus" NOT NULL DEFAULT 'PENDING';
