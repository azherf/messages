import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string): Promise<{ id: string; content: string }> {
    return await this.messagesRepo.findOne(id);
  }

  async findAll(): Promise<{ id: string; content: string }[]> {
    return await this.messagesRepo.findAll();
  }

  async create(content: string): Promise<{ id: string; content: string }> {
    return await this.messagesRepo.create(content);
  }
}
