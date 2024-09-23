import { Component } from '@angular/core';

@Component({
  selector: 'app-slidshow',
  templateUrl: './slidshow.component.html',
  styleUrls: ['./slidshow.component.scss']
})
export class SlidshowComponent {
  images = [
    'assets/images/slide1.jpg',
    'assets/images/slide2.jpg',
    'assets/images/slide3.jpg',
    'assets/images/slide1.jpg',
    'assets/images/slide2.jpg',
    'assets/images/slide3.jpg',
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Slide every 3 seconds
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    clearInterval(this.intervalId); // Stop the auto slide when user interacts
    this.startAutoSlide(); // Restart the auto slide
  }

}
