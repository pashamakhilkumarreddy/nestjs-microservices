import { Controller, Get, Logger } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);

  @Get("/")
  home() {
    return this.appService.home();
  }

  @Get('/health')
  async checkHealth() {
    this.logger.log('Ping Logger');
    return this.appService.checkHealth();
  }
}