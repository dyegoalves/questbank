import { Module } from '@nestjs/common';
import { QuestbankService } from './questbank.service';
import { QuestbankController } from './questbank.controller';

@Module({
  providers: [QuestbankService],
  controllers: [QuestbankController],
})
export class QuestbankModule {}
