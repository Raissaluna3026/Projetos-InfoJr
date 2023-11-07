-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "paes" INTEGER NOT NULL,
    "naFila" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Clientes" ("id", "name", "paes") SELECT "id", "name", "paes" FROM "Clientes";
DROP TABLE "Clientes";
ALTER TABLE "new_Clientes" RENAME TO "Clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
