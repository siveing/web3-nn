import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Todo } from "./entities/todo.entity";

export class TodoRepository extends Repository<Todo> {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ) {
        super(todoRepository.target, todoRepository.manager, todoRepository.queryRunner);
    }
}