import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: 'app.component.html', 
  styles: [],
})
export class AppComponent {
  title = 'angular-ecommerceSite';
}
