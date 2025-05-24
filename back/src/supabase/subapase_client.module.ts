// supabase/supabase.module.ts
import { Module } from '@nestjs/common';
import { SupabaseService } from './subapase_client.service';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService], // 👈 necesario para que otros módulos puedan usarlo
})
export class SupabaseModule {}
