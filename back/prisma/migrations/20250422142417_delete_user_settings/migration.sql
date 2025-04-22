/*
  Warnings:

  - You are about to drop the `user_settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_settings" DROP CONSTRAINT "user_settings_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "img_perfil" TEXT DEFAULT 'imgDefault',
ADD COLUMN     "last_name" TEXT,
ADD COLUMN     "name" TEXT;

-- DropTable
DROP TABLE "user_settings";
