import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) { }

  /**
   * Create the TODO
   * @param createTodoDto 
   * @returns CreateTodoDto
   */
  async create(createTodoDto: CreateTodoDto) {
    const todoData: CreateTodoDto = await this.todoRepository.save(createTodoDto);
    return todoData;
  }

  /**
   * Find all data of todo
   * @returns CreateTodoDto[]
   */
  async findAll() {
    return await this.todoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
