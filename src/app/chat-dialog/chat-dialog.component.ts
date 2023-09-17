import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ChatGptService } from '../services/chat-gpt.service';
import { ChatService } from '../services/chat.service';
import { Observable, Subscription } from 'rxjs';
import { Message } from '../models/Message';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit, OnDestroy {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  @ViewChild('inputMessageTextArea') textareaElement!: ElementRef;
  messages: Message[] = [];
  inputMessage: string = '';
  isLoading: boolean = false;

  isChatBoxMinimized = true;
  messagesSubscription: Subscription | undefined;

  constructor(private chatgpt: ChatGptService, private chatService: ChatService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.messages = this.chatService.messages;
    this.isChatBoxMinimized = this.chatService.status
    if(!this.isChatBoxMinimized) this.scrollToBottom()
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }



  adjustTextareaHeight(event: any): void {
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
      }, 100);

    } catch(err) {
      console.log(err)
    }
  }

  toggleChatBox(): void {
    this.isChatBoxMinimized = !this.isChatBoxMinimized;
    if(!this.isChatBoxMinimized) this.scrollToBottom()
    this.chatService.status = this.isChatBoxMinimized
  }

  clearMessages(): void {
    this.messages = []
    this.chatService.clearMessages()

  }

  addMessages(message: string, fromService: boolean): void {
    this.chatService.addMessage(message, fromService);
      this.messages.push({ content: message, fromService });
    this.scrollToBottom();
  }

  copyToClipboard(messageContent: string): void {
    navigator.clipboard.writeText(messageContent).then(function() {
    }, function(err) {
    });
  }


  getMessageClasses(message: Message): string {
    if (this.isResponseMessage(message)) {
      return 'message alternate-message';
    }
    return 'message';
  }

  isResponseMessage(message: Message): boolean {
    return message.fromService;
  }

  sendMessage(): void {
    const question = this.inputMessage.trim();
    if (question !== '') {

      this.chatService.addMessage(this.inputMessage, false);
      this.messages.push({ content: this.inputMessage, fromService: false });
      this.inputMessage = '';
      this.scrollToBottom()
      setTimeout(() => {
        this.adjustTextareaHeight({ target: this.textareaElement.nativeElement });
      }, 0);

      this.isLoading = true;
      this.chatgpt.GetAnswer(question).subscribe((response) => {
        this.addMessages(response, true);

        this.isLoading = false;
      });

    }
  }
}
