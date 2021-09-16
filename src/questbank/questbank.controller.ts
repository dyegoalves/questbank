/* eslint-disable prettier/prettier */
import { QuestbankService } from './questbank.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQuestDto } from './dto/CreateQuestDto';
import { UpdateQuestDto } from './dto/UpdateQuestDto';

@Controller('questbank')
export class QuestbankController {
  constructor(private readonly questbankservice: QuestbankService) { }

  @Get()
  findAll() {
    return this.questbankservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questbankservice.findOne(+id);
  }

  @Post()
  create(@Body() createQuestDto: CreateQuestDto) {
    return this.questbankservice.create(createQuestDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestDto: UpdateQuestDto) {
    return this.questbankservice.update(+id, updateQuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questbankservice.remove(+id);
  }

}
