import { Component } from '@angular/core';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    // './home.component.mobile.scss'
  ]
})
export class HomeComponent {

}
