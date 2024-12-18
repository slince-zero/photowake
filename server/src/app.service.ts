import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getUsers(): Promise<any> {
    return 'hello world';
  }
}
