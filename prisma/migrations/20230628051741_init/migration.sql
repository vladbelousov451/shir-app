-- CreateTable
CREATE TABLE "Invoice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "Date" DATETIME NOT NULL,
    "cost" INTEGER NOT NULL,
    "status" TEXT,
    "invoiceNumber" INTEGER NOT NULL
);
