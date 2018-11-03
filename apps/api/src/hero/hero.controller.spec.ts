import { Test, TestingModule } from '@nestjs/testing';
import { HeroController } from './hero.controller';

describe('Hero Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HeroController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HeroController = module.get<HeroController>(HeroController);
    expect(controller).toBeDefined();
  });
});
