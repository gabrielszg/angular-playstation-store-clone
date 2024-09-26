import { Component, Input } from '@angular/core';
import { MediaType, Platform } from '../../../data/dataFake';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {
  
  @Input()
  gameMediaType!: MediaType;
  
  @Input()
  gamePlatforms!: Platform[];
  
  @Input()
  gamePrice: string = '';
}
