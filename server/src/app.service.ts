import { Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/express';

@Injectable()
export class AppService {
  async getUsers(): Promise<any> {
    return clerkClient.users.getUserList();
  }
}
