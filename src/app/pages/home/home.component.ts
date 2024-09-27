import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CardData, dataFake } from '../../data/dataFake';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CardComponent],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent {
	gameList: CardData[] = dataFake;
}
