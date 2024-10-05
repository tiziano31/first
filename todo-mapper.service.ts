import { Injectable } from '@nestjs/common';
import { Todo } from '../../entities/todo/todo.entities';
import { TodoDto } from '../../dto/todo.dto';

@Injectable()
export class TodoMapperService {

  public modelToDto({ id, title, completed }: Todo): TodoDto {
    return new TodoDto({ id, title, completed });
  }

}