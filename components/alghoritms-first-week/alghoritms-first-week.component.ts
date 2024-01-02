import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alghoritms-first-week',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './alghoritms-first-week.component.html',
  styleUrl: './alghoritms-first-week.component.scss'
})
export class AlghoritmsFirstWeekComponent {
   //1
   fahrenheitValue: number = 0;
   celsiusValue: number = 0;
   
   calculateCelsius():number {
    return this.celsiusValue = (this.fahrenheitValue - 32) * 5 / 9;
   }
   exam1:number=0;
   exam2:number=0;
   exam3:number=0;
   exam4:number=0;
   result:string="";
   //2
   calculateExam() {
     let total =(this.exam1+this.exam2+this.exam3+this.exam4)/4;
     if (total > 60) {
       this.result = "Tebrikler! Başarılı sınıfı geçtiniz";
     } else {
       this.result = "Başarısız sınıf tekrarı";
     }
   }
   //3
   buttonCount: number = 0;
   increaseNumber() {
     this.buttonCount++;
   }
   //4
   //reverse string
   reverseInput: string = "";
   reversedString: string = "";
   
   reverseString(): void {
     let tersDizi = this.reverseInput.split('').reverse();
     this.reversedString = tersDizi.join('');
   }
   //5
   //min and max sum
    inputNumber:number=0;
    numbers:number[]=[];
    min:number=0;
    max:number=0;
    addNumber(){
     this.numbers.push(this.inputNumber)
    }
    calculateMaxMin(){
     this.numbers.sort((a,b)=> a-b);
     let length = this.numbers.length
 
    
      if(length>2){
        this.min = this.numbers[0];
        this.max = this.numbers[length - 1];
      }else{
       alert("en az 3 sayi girin")
      }
    }
    //6
    // special triangle
    square1:number=0;
    square2:number=0;
    square3:number=0;
 
    isSpecialTriangle():boolean{
     const squareR1 = this.square1 * this.square1;
     const squareR2 = this.square2 * this.square2;
     const squareR3 = this.square3 * this.square3;
     if((squareR1!=0|| squareR2!=0 ||squareR3!=0 )&&((squareR1+squareR2===squareR3) || (squareR2+ squareR3 === squareR1) || (squareR1+ squareR3 ===squareR2)))
     {
       return true;
    }
    else{
     return false;
    }
   
 }
  //7 
 //Faktoriyel
 
   factorialInput: number =0;
   factorialResult: number =0;
 
   calculateFactorial() {
     if (this.factorialInput !== null) {
       let fak = 1;
       for (let i = this.factorialInput; i > 1; i--) {
         fak = fak * i;
       }
       this.factorialResult = fak;
     }
   }
 
 
 
 
 //8 Basamak Ekle
   numberq8: number | null = null;
   numberofDigits: number | null = null;
 
   calculateDigit() {
     if (this.numberq8 !== null) {
       let tempNumb = this.numberq8;
       let i = 0;
 
       do {
         tempNumb = tempNumb / 10;
         i++;
       } while (tempNumb >= 1);
 
       this.numberofDigits = i;
     }
   }
 
 //9
 //Yıl kontrolü 28 şubat
 year: number | null = null;
 isYear: boolean | null = null;
 
 checkYear() {
   if (this.year !== null) {
     this.isYear = this.year % 4 === 0;
   }
 }


}
