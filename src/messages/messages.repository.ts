import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string): Promise<{ id: string; content: string }> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll(): Promise<{ id: string; content: string }[]> {
    const contents = await readFile('messages.json', 'utf-8');
    return JSON.parse(contents);
  }

  async create(message: string): Promise<{ id: string; content: string }> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = String(Object.keys(messages).length + 1);
    const newMessage = { id, content: message };
    messages[id] = newMessage;
    await writeFile('messages.json', JSON.stringify(messages));
    return newMessage;
  }
}
