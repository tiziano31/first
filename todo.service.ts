import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo/todo.entities';
import { CreateTodoDto } from '../../dto/create-todo.dto';
import { UpdateTodoDto } from '../../dto/update-todo.dto';
import { TodoDto } from '../../dto/todo.dto';
import { TodoMapperService } from '../todo-mapper/todo-mapper.service';

@Injectable()
export class TodoService {
  public constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    private readonly todoMapper: TodoMapperService
  ) {}

  public async findAll(): Promise<TodoDto[]> {
    const todos = await this.todoRepository.find();
    return todos.map(this.todoMapper.modelToDto);
  }

  public async findOne(id: number): Promise<TodoDto> {
    const todo = await this.todoRepository.findOneBy({ id }); // Usa findOneBy per cercare per id
    if (!todo) throw new NotFoundException(); // Controllo diretto
    return this.todoMapper.modelToDto(todo);
  }

  public async add({ title }: CreateTodoDto): Promise<TodoDto> {
    const todo = new Todo(title);
    const savedTodo = await this.todoRepository.save(todo);
    return this.todoMapper.modelToDto(savedTodo);
  }

  public async edit(id: number, { title, completed }: UpdateTodoDto): Promise<TodoDto> {
    const todo = await this.todoRepository.findOneBy({ id }); // Usa findOneBy

    if (!todo) throw new NotFoundException();

    if (title !== undefined) todo.title = title; // Controllo per evitare sovrascritture non volute
    if (completed !== undefined) todo.completed = completed;

    const savedTodo = await this.todoRepository.save(todo);
    return this.todoMapper.modelToDto(savedTodo);
  }

  public async remove(id: number): Promise<TodoDto> { // Cambia il tipo di ritorno a TodoDto
    const todo = await this.todoRepository.findOneBy({ id }); // Usa findOneBy

    if (!todo) throw new NotFoundException();

    await this.todoRepository.remove(todo);
    return this.todoMapper.modelToDto(todo); // Restituisci l'oggetto DTO
  }
}