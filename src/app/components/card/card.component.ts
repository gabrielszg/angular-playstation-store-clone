import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from "./card-pricing/card-pricing.component";
import { MediaType, Platform } from '../../data/dataFake';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input()
  gameCover: string = '';

  @Input()
  gameLabel: string = '';

  @Input()
  gameMediaType!: MediaType;
  
  @Input()
  gamePlatforms!: Platform[];
  
  @Input()
  gamePrice: string = 'R$ 399,90';
}
