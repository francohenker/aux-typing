import { Test, TestingModule } from '@nestjs/testing';
import { PhraseToUserController } from './phrase-to-user.controller';

describe('PhraseToUserController', () => {
  let controller: PhraseToUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhraseToUserController],
    }).compile();

    controller = module.get<PhraseToUserController>(PhraseToUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
