export enum MediaType {
    DIGITAL = 'DIGITAL',
    DISC = 'DISC',
}

export enum Platform {
    PS3 = 'PS3',
    PS4 = 'PS4',
    PS5 = 'PS5',
}

export type CardData = {
	cover: string;
	label: string;
	mediaType: MediaType;
    platforms: Platform[];
	price: string;
};

export const dataFake: CardData[] = [
	{
		cover: '/bt-1.jpg',
		label: 'DIGITAL',
		mediaType: MediaType.DIGITAL,
        platforms: [Platform.PS4],
		price: 'R$ 129,99',
	},

	{
		cover: '/bt-4.jpg',
		label: 'EXCLUSIVE',
		mediaType: MediaType.DISC,
        platforms: [Platform.PS5],
		price: 'R$ 269,99',
	},

	{
		cover: '/ac-cover.jpg',
		label: 'BEST OF YEAR',
		mediaType: MediaType.DIGITAL,
        platforms: [Platform.PS5],
		price: 'R$ 369,99',
	},

	{
		cover: '/bt-hardline.jpg',
		label: 'NEW',
		mediaType: MediaType.DIGITAL,
        platforms: [Platform.PS3, Platform.PS4, Platform.PS5],
		price: 'R$ 369,99',
	},
];
