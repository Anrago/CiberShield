-- DropForeignKey
ALTER TABLE "exercise_results" DROP CONSTRAINT "exercise_results_exercise_id_fkey";

-- AlterTable
ALTER TABLE "exercise_results" ALTER COLUMN "exercise_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "exercise_results" ADD CONSTRAINT "exercise_results_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE SET NULL ON UPDATE CASCADE;
