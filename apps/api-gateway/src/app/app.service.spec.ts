import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('home', () => {
    it('should return "Hola Mundo!" and time', () => {
      const dateString = new Date().toString();
      expect(service.home()).toEqual({
        message: 'Hola Mundo!',
        time: dateString
      });
    });
  });
});
