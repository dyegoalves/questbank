import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestbankModule } from './questbank/questbank.module';

@Module({
  imports: [QuestbankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
