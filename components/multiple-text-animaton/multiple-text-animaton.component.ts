import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiple-text-animaton',
  standalone: true,
  imports: [],
  templateUrl: './multiple-text-animaton.component.html',
  styleUrl: './multiple-text-animaton.component.scss'
})
export class MultipleTextAnimatonComponent implements OnInit {
  @ViewChild('typeText') typeTextElement!: ElementRef;

  typeItems = 'Principle Developer';
  currentIndex = 0;
  isCompleted = false;
  intervalId: any | undefined;

  ngOnInit(): void {

    setTimeout(() => {
      const textElement: HTMLElement | null = this.typeTextElement?.nativeElement;

      if (textElement) {
        this.intervalId = setInterval(() => {
          let currentText = this.typeItems.substring(0, this.currentIndex);

          if (this.isCompleted) {
            currentText = currentText.slice(0, -1);
            this.currentIndex--; 

            if (this.currentIndex === 0) {
              this.isCompleted = false;
            }
          } 
          else {
            currentText += this.typeItems[this.currentIndex];
            this.currentIndex++; 

            if (this.currentIndex === this.typeItems.length) {
              this.isCompleted = true; 
            }
          }

          textElement.textContent = currentText;
        }, 200);
      }
    }, 0);
  }
  
}
