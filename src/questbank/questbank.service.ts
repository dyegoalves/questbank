/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateQuestDto } from './dto/CreateQuestDto';

@Injectable()
export class QuestbankService {
  findAll() {
    return 'ola';
  }
  findOne(arg0: number) {
    return arg0;
  }

  create(createQuestDto: CreateQuestDto) {
    return createQuestDto;
  }

  update(arg0: number, updateUserDto: any) {
    return { updateUserDto, arg0 };
  }

  remove(arg0: number) {
    return arg0;
  }
}
