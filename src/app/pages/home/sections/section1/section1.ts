import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section1.html',
  styleUrl: './section1.css',
})


export class Section1 implements AfterViewInit  {
  
  @ViewChild('scrollImage') scrollImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.scrollImage.nativeElement.classList.add('opacity-100');
          observer.unobserve(this.scrollImage.nativeElement);
        }
      },
      {
        threshold: 0.2, // trigger when 20% of image is visible
      }
    );

    observer.observe(this.scrollImage.nativeElement);
  }

  backgroundImage = '../../../../../assets/back_1.png';
}
