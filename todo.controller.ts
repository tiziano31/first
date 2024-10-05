import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './services/todo/todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDto } from './dto/todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<TodoDto> {
    return this.todoService.add(createTodoDto);
  }

  @Get()
  findAll(): Promise<TodoDto[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TodoDto> { // Cambiato il tipo in string
    return this.todoService.findOne(parseInt(id)); // Converte in numero
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<TodoDto> { // Cambiato il tipo in string
    return this.todoService.edit(parseInt(id), updateTodoDto); // Converte in numero
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TodoDto> { // Cambiato il tipo in string
    return this.todoService.remove(parseInt(id)); // Converte in numero
  }
}