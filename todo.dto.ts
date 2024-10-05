import { IsString, IsBoolean } from 'class-validator';

export class TodoDto {
  id: number; // Identificatore del Todo

  @IsString()
  title: string;

  @IsString()
  desc?: string; // Descrizione opzionale

  @IsBoolean()
  completed: boolean;
  
  constructor(partial: Partial<TodoDto>) {
        Object.assign(this, partial);
    }
}	