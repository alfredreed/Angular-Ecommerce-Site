import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink, PrimaryButtonComponent],
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.css'
})
export class HeaderComponent {
    title = signal('Angular Ecommerce');
    
    cartService = inject(CartService)
}