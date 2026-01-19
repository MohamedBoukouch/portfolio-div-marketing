import { Component } from '@angular/core'; 

import { Section1 } from './sections/section1/section1';
import { Section2 } from './sections/section2/section2';
import { Section3 } from './sections/section3/section3';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Section1, Section2, Section3],
})
export class HomeComponent {}
