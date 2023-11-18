-- CreateTable
CREATE TABLE "Usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "logado" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Favs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pokemon" TEXT NOT NULL,
    "login" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_login_key" ON "Usuarios"("login");
