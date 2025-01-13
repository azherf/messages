import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // Don't do this in real life
    this.messagesRepo = new MessagesRepository();
  }

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
