import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  activeIndex = 0;

  faqs: FaqItem[] = [
    {
      question: 'What is this portal about?',
      answer:
        'This portal will be used for electrical licensing for JSW Employees.'
    },
    {
      question: 'How do I reset my password?',
      answer:
        'Please contact the system administrator to reset your password.'
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can contact support using the Contact Us page.'
    },
    {
      question: 'How to add new license?',
      answer:
        'New licenses can be created through the Requisition Form section.'
    },
    {
      question:
        'Where can I find JSWs Email ID, phone number or location?',
      answer:
        'All contact information is available in the Contact Us section.'
    }
  ];

  toggle(index: number): void {

    if (this.activeIndex === index) {
      this.activeIndex = -1;
      return;
    }

    this.activeIndex = index;
  }

}