import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('home', () => {
    it('should return "Hola Mundo!" and time', () => {
      const appController = app.get<AppController>(AppController);
      const dateString = new Date().toString();
      expect(appController.home()).toEqual({
        message: 'Hola Mundo!',
        time: dateString
      });
    });
  });
});
