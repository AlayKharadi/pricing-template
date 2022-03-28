import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
	pricings!: object[];
	constructor() { }

	ngOnInit(): void {
		this.pricings = [
			{
				name: 'basic',
				price: {
					type: '$',
					value: 19.99
				},
				users: 2,
				storage: {
					type: 'MB',
					size: 500
				},
				transfer: {
					type: 'MB',
					size: 100
				}
			},
			{
				name: 'professional',
				price: {
					type: '$',
					value: 24.99
				},
				users: 5,
				storage: {
					type: 'GB',
					size: 100
				},
				transfer: {
					type: 'GB',
					size: 10
				}
			},
			{
				name: 'master',
				price: {
					type: '$',
					value: 39.99
				},
				users: 10,
				storage: {
					type: 'TB',
					size: 1
				},
				transfer: {
					type: 'GB',
					size: 100
				}
			}
		];
	}

}
