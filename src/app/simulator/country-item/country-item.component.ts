import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {
  country: string;
  @ViewChild('countryImg') country_img: ElementRef;
  @ViewChild('countryName') country_name: ElementRef;
  constructor() {}

  ngOnInit() {}

  setCountry(country: string) {
    this.country = country;
    console.log('The Country Selected is: ' + country);

    if (country == 'Canada') {
      this.country_img.nativeElement.src = 'assets/simulator/countries/can.png';
    } else if (country == 'Nigeria') {
      this.country_img.nativeElement.src = 'assets/simulator/countries/nig.png';
    }
    this.country_name.nativeElement.innerHTML = country;
  }
}
