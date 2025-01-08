import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List all messages';
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
    return 'Create a message' + body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return 'Get a message' + id;
  }
}
