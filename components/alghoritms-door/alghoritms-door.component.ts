import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-alghoritms-door',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alghoritms-door.component.html',
  styleUrl: './alghoritms-door.component.scss'
})
export class AlghoritmsDoorComponent implements OnInit {
  ngOnInit() {
    gsap.set(".doorWrapper", { perspective: 800 });
    gsap.set(".door", { transformStyle: "preserve-3d" });
    gsap.set(".back", { rotationY: -180 });
    gsap.set(".d2", { rotationY: -90 });
    gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });
    gsap.to(".door", { duration: 10, rotationY: "-=720", repeat: -1, ease: "none" });
  }

  buttonText:String="Start Door";
  isDoorOpen = false;
  
  rotateDoor() {
    this.isDoorOpen = !this.isDoorOpen;
    this.isDoorOpen ? this.buttonText= "Door working!" : this.buttonText ="Start Door";  
  }

  //test
  test(){
    return "test";
  }
}
