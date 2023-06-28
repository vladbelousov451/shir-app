-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invoice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "status" TEXT,
    "invoiceNumber" INTEGER NOT NULL
);
INSERT INTO "new_Invoice" ("Date", "company", "cost", "id", "invoiceNumber", "status") SELECT "Date", "company", "cost", "id", "invoiceNumber", "status" FROM "Invoice";
DROP TABLE "Invoice";
ALTER TABLE "new_Invoice" RENAME TO "Invoice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
