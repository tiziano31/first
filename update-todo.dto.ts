import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  title?: string; // Modifica opzionale del titolo

  @IsOptional()
  @IsString()
  desc?: string; // Modifica opzionale della descrizione

  @IsOptional()
  @IsBoolean()
  completed?: boolean; // Modifica opzionale dello stato di completamento
}// Modifica opzionale dello stato di completamento
