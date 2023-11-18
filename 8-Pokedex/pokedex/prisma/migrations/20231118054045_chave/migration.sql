/*
  Warnings:

  - Added the required column `chave` to the `Favs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Favs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pokemon" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "chave" TEXT NOT NULL
);
INSERT INTO "new_Favs" ("id", "imagem", "login", "pokemon") SELECT "id", "imagem", "login", "pokemon" FROM "Favs";
DROP TABLE "Favs";
ALTER TABLE "new_Favs" RENAME TO "Favs";
CREATE UNIQUE INDEX "Favs_chave_key" ON "Favs"("chave");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
