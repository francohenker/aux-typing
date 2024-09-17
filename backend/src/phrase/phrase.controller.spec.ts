import { Test, TestingModule } from '@nestjs/testing';
import { PhraseController } from './phrase.controller';

describe('PhraseController', () => {
  let controller: PhraseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhraseController],
    }).compile();

    controller = module.get<PhraseController>(PhraseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
