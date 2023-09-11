import { Injectable } from '@angular/core';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly chatMessagesKey = 'chatMessages';
  private readonly chatStatusKey = 'chatStatus'

  get status(): boolean {
    const storedMessages = sessionStorage.getItem(this.chatStatusKey);
    return storedMessages ? JSON.parse(storedMessages) : false;
  }

  set status(value: boolean) {
    sessionStorage.setItem(this.chatStatusKey, JSON.stringify(value));
  }

  get messages(): Message[] {
    const storedMessages = sessionStorage.getItem(this.chatMessagesKey);
    return storedMessages ? JSON.parse(storedMessages) : [];
  }

  set messages(value: Message[]) {
    sessionStorage.setItem(this.chatMessagesKey, JSON.stringify(value));
  }

  addMessage(message: string, fromService: boolean): void {
    const currentMessages = this.messages;
    this.messages = [...currentMessages, { content: message, fromService }];
  }

  clearMessages(): void {
    sessionStorage.clear()
  }
}
