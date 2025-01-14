import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    //Don't do this is in real life
    //Use dependency injeciton instead
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages(): Promise<{ id: string; content: string }[]> {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(
    @Body() body: CreateMessageDto,
  ): Promise<{ id: string; content: string }> {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(
    @Param('id') id: string,
  ): Promise<{ id: string; content: string }> {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
