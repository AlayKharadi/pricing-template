import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent implements OnInit {
  @Input() pricing!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
