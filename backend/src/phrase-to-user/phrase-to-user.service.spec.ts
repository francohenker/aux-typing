import { Test, TestingModule } from '@nestjs/testing';
import { PhraseToUserService } from './phrase-to-user.service';

describe('PhraseToUserService', () => {
  let service: PhraseToUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhraseToUserService],
    }).compile();

    service = module.get<PhraseToUserService>(PhraseToUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
