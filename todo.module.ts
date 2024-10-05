import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo/todo.entities'; // Importa l'entità Todo direttamente
import { TodoService } from './services/todo/todo.service';
import { TodoMapperService } from './services/todo-mapper/todo-mapper.service';
import { TodoController } from './todo.controller'; 


@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]), 
  ],
  providers: [TodoService, TodoMapperService], 
  controllers: [TodoController], 
})
export class TodoModule {}
