-- AlterTable
ALTER TABLE "exercise_results" ADD COLUMN     "exercise_level_id" INTEGER,
ADD COLUMN     "exercise_type_id" INTEGER;

-- AddForeignKey
ALTER TABLE "exercise_results" ADD CONSTRAINT "exercise_results_exercise_type_id_fkey" FOREIGN KEY ("exercise_type_id") REFERENCES "exercise_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_results" ADD CONSTRAINT "exercise_results_exercise_level_id_fkey" FOREIGN KEY ("exercise_level_id") REFERENCES "exercise_levels"("id") ON DELETE SET NULL ON UPDATE CASCADE;
