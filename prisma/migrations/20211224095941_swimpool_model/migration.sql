-- CreateTable
CREATE TABLE "SwimPool" (
    "id" SERIAL NOT NULL,
    "sigunguName" TEXT,
    "sigunguCode" TEXT,
    "name" TEXT NOT NULL,
    "inOutDoorDivName" TEXT,
    "manageMainName" TEXT,
    "contactNo" TEXT,
    "homepageAddr" TEXT,
    "divingLength" INTEGER,
    "divingWidth" INTEGER,
    "divingDepth" INTEGER,
    "regPoolLength" INTEGER,
    "regPoolWidth" INTEGER,
    "regPoolLaneCnt" INTEGER,
    "irregPoolLength" INTEGER,
    "irregPoolWidth" INTEGER,
    "irregPoolLaneCnt" INTEGER,
    "seatCnt" INTEGER,
    "personCnt" INTEGER,
    "latitude" TEXT,
    "longitude" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SwimPool_pkey" PRIMARY KEY ("id")
);
