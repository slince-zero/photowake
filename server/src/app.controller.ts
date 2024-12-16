import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ClerkGuard } from './clerk.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  @UseGuards(ClerkGuard)
  async getUsers() {
    return this.appService.getUsers();
  }
}
