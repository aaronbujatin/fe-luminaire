import { Component } from '@angular/core';
import { Modal } from 'flowbite';
import { Carousel, Dropdown, initTE, Ripple} from 'tw-elements'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  ngOnInit() {
    initTE({ Carousel, Dropdown,Modal, Ripple,
      initTE, });
  }
}
