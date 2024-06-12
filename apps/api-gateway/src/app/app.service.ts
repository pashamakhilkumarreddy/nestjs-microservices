import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home(): { time: string; message: string } {
    return { message: 'Hola Mundo!', time: new Date().toString() };
  }

  /**
   * Checks the health of the application.
   * @returns {Promise<object>} - An object containing health information.
   */
  async checkHealth(): Promise<object> {
    return {
      status: 'ok',
      version: process.env.npm_package_version ?? '1.0.0',
      uptime: process.uptime() + ' seconds',
    };
  }
}
