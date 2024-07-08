import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } //must be public otherwhise angular won't be able to bind it

  ngOnInit(): void { }
}
