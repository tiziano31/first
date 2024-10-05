import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsOptional() // Aggiunto per indicare che il campo è opzionale
  @IsString()
  desc?: string; // Descrizione opzionale

  @IsBoolean()
  completed: boolean; // Considera se dovrebbe essere opzionale o avere un valore di default
}