import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const message: string = "hello this is siveing"
    return message;
  }
}
